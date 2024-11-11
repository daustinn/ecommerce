'use server'

import { CartItem } from '@/stores/cart.store'
import { stripe } from '../lib/stripe'
import { urlFor } from '@/sanity/lib/image'

export type Metadata = {
  orderNumber: string
  customerName: string
  customerEmail: string
  clerkUserId: string
}

export type GroupedCartItems = {
  product: CartItem['product']
  quantity: number
}

export async function createCheckoutSession(
  items: GroupedCartItems[],
  metadata: Metadata
): Promise<string> {
  const itemsWithPrice = items.filter((item) => !item.product.price)

  try {
    if (itemsWithPrice.length > 0) {
      throw new Error('Some items do not have a price')
    }

    // Search for the customer by email
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1
    })

    let customerId: string | undefined

    // If the customer exists, use their ID
    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    }

    // If the customer doesn't exist, create a new one
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_creation: customerId ? undefined : 'always',
      customer_email: !customerId ? metadata.customerEmail : undefined,
      metadata,
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&order_number=${metadata.orderNumber}`,
      cancel_url: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      line_items: items.map((item) => ({
        price_data: {
          currency: 'pen',
          unit_amount: Math.round(item.product.price! * 100),
          product_data: {
            name: item.product.name || 'Unknown product',
            description: `Product ID: ${item.product._id}`,
            metadata: {
              id: item.product._id
            },
            images:
              item.product.images?.map((image) => urlFor(image).url()) ||
              undefined
          }
        },
        quantity: item.quantity
      }))
    })

    // If the session doesn't have a URL, throw an error
    if (!session.url) {
      throw new Error('No session URL returned')
    }

    // Return the URL
    return session.url
  } catch (error) {
    console.error('Error creating checkout session', error)
    throw error
  }
}
