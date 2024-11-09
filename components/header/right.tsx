import Link from 'next/link'
import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { IoIosSearch } from 'react-icons/io'
import User from './user'

export default function RightHeader() {
  return (
    <nav className="flex flex-grow items-center gap-8 basis-0 justify-end">
      <Link
        className="hidden lg:flex"
        href="/cart"
        title="Mi carrito de compra"
      >
        <GiShoppingCart size={25} />
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
