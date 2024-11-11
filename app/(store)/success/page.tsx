'use client'

import React from 'react'
import ClearCart from './@clear-cart'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const order_number = searchParams.get('order_number')

  return (
    <div className="text-center py-20 px-4 w-full max-w-xl mx-auto">
      <div className="border rounded-3xl shadow-sm shadow-white/5 p-10 border-stone-900">
        <ClearCart order_number={order_number} />
        <h1 className="font-larken text-3xl">¡Gracias por tu compra!</h1>
        <p className="pt-5 text-sm">Tu order a sido confirmada</p>
        <div className="text-left border-y text-sm text-stone-300 py-5 border-dotted border-stone-600 mt-4">
          <div className="flex justify-between">
            <p>Numero de orden:</p>
            <p>{order_number}</p>
          </div>
        </div>
        <div className="text-left text-sm text-stone-300 py-4">
          Por favor revisa tu correo para mas detalles sobre tu orden.
        </div>
        <div className="space-y-3 pt-5 gap-2">
          <Link
            href="/orders"
            className="p-3 bg-white hover:bg-white/90 text-black block rounded-full px-5"
          >
            Ver detalles de la orden
          </Link>
          <Link
            href="/products"
            className="border p-3 block hover:bg-white/10 rounded-full border-stone-700 px-5"
          >
            Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  )
}
