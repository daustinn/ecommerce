import React from 'react'
import CartList from './@cart'

export default function CartPage() {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <header className="px-7">
        <h1 className="text-2xl font-larken ">Tu carrito</h1>
      </header>
      <CartList />
    </div>
  )
}
