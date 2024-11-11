'use client'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function MyTabs() {
  const pathname = usePathname()
  const { isSignedIn } = useUser()

  const items = {
    cart: {
      title: 'Tu carrito',
      href: '/cart',
      active: pathname.endsWith('/cart'),
      disabled: false
    },
    orders: {
      title: 'Tus pedidos',
      href: '/orders',
      active: pathname.endsWith('/orders'),
      disabled: !isSignedIn
    }
  }
  return (
    <header className="border-b border-stone-700">
      <nav className="flex max-w-4xl mx-auto w-full text-stone-400">
        {Object.entries(items).map(
          ([key, item]) =>
            !item.disabled && (
              <Link
                data-active={item.active ? '' : undefined}
                className="px-4 py-2 hover:text-white hover:border-stone-500 data-[active]:border-white border-b border-transparent text-nowrap data-[active]:text-white"
                key={key}
                href={item.href}
              >
                {item.title}
              </Link>
            )
        )}
      </nav>
    </header>
  )
}
