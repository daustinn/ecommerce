import { Metadata } from '@/actions/createCheckoutSession'
import { stripe } from '@/lib/stripe'
import { backendClient } from '@/sanity/lib/backendClient'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  // Get the body
  const body = await req.text()

  // Get the headers
  const headersList = await headers()

  // Get the signature from the headers
  const sig = headersList.get('stripe-signature')

  // Verify the event by passing the secret
  if (!sig) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Get the webhook secret
  const webHookSecret = process.env.STRIPE_WEBHOOK_SECRET

  // Check if the webhook secret is set
  if (!webHookSecret) {
    console.error('⚠️ Stripe webhook secret is not set.')
    return NextResponse.json({ error: 'Invalid secret' }, { status: 400 })
  }

  let event: Stripe.Event

  // Verify the event
  try {
    // Construct the event
    event = stripe.webhooks.constructEvent(body, sig, webHookSecret)
  } catch (error) {
    console.error('⚠️ Error verifying webhook signature :', error)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    // Get the session
    const session = event.data.object as Stripe.Checkout.Session
    try {
      // Create an order in Sanity
      await createOrderSanity(session)
    } catch (error) {
      console.error('⚠️ Error creating order:', error)
      return NextResponse.json(
        { error: 'Error creating order' },
        { status: 500 }
      )
    }
  }
  return NextResponse.json({ received: true })
}

// Create an order in Sanity
async function createOrderSanity(session: Stripe.Checkout.Session) {
  const {
    id,
    amount_total,
    currency,
    metadata,
    payment_intent,
    customer,
    total_details
  } = session

  const { orderNumber, customerName, customerEmail, clerkUserId } =
    metadata as Metadata

  // Get the line items with product details
  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    { expand: ['data.price.product'] }
  )

  // Map the line items to Sanity products
  const sanityProducts = lineItemsWithProduct.data.map((item) => ({
    _key: crypto.randomUUID(),
    product: {
      _type: 'reference',
      _ref: (item.price?.product as Stripe.Product)?.metadata?.id
    },
    quantity: item.quantity ?? 0
  }))

  // Create the order in Sanity
  const order = await backendClient.create({
    _type: 'order',
    orderNumber,
    stripeCheckoutSessionId: id,
    stripePaymentIntentId: payment_intent,
    customerName,
    stripeCustomerId: customer,
    clerkUserId,
    customerEmail,
    currency,
    ammountDiscount: total_details?.amount_discount
      ? total_details.amount_discount / 100
      : 0,
    products: sanityProducts,
    totalPrice: amount_total ? amount_total / 100 : 0,
    status: 'paid',
    orderDate: new Date().toISOString()
  })

  return order
}
