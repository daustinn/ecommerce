'use client'

import useCartStore from '@/stores/cart.store'
import { useEffect } from 'react'

export default function ClearCart({
  order_number
}: {
  order_number: string | null | undefined
}) {
  const clearCart = useCartStore((state) => state.clearCart)
  useEffect(() => {
    if (order_number) {
      clearCart()
    }
  }, [clearCart, order_number])
  return null
}
