'use client'

import Link from 'next/link'
import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { IoIosSearch } from 'react-icons/io'
import User from './user'
import useCartStore from '@/stores/cart.store'

export default function RightHeader() {
  const items = useCartStore((state) => state.items)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <nav className="flex flex-grow items-center gap-8 basis-0 justify-end">
      <Link
        className="hidden lg:flex relative"
        href="/cart"
        title="Mi carrito de compra"
      >
        <GiShoppingCart size={25} />
        {totalItems > 0 && (
          <div className="absolute w-5 h-5 grid place-content-center -top-2 -right-2 rounded-full bg-blue-700 text-white text-xs">
            {totalItems}
          </div>
        )}
      </Link>
      <Link
        className="hidden lg:flex"
        href="/products"
        title="Buscar productos"
      >
        <IoIosSearch size={25} />
      </Link>
      <User />
    </nav>
  )
}
