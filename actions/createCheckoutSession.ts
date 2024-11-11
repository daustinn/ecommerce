'use server'

import { CartItem } from '@/stores/cart.store'

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
    return 'checkoutURL'
  } catch (error) {
    console.error('Error creating checkout session', error)
    throw error
  }
}
