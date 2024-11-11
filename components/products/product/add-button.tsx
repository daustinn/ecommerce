'use client'

import { GET_PRODUCT_QUERYResult, Product } from '@/sanity.types'
import useCartStore from '@/stores/cart.store'
import React from 'react'
import { HiPlus } from 'react-icons/hi2'

type Props = {
  product: GET_PRODUCT_QUERYResult
}

export default function AddButtonProduct({ product }: Props) {
  if (!product) return null

  const addItem = useCartStore((state) => state.addItem)

  const exhaustive = product.stock === 0

  return (
    <button
      disabled={exhaustive}
      onClick={() => addItem(product as unknown as Product)}
      className="py-3 flex justify-center gap-3 hover:scale-110 transition-transform disabled:opacity-50 disabled:pointer-events-none px-5 w-full bg-white rounded-full text-black"
    >
      <HiPlus size={25} />
      {exhaustive ? 'Agotado' : 'Agregar al carrito'}
    </button>
  )
}
