'use client'

import { urlFor } from '@/sanity/lib/image'
import useCartStore from '@/stores/cart.store'
import React from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import { SignInButton, useUser } from '@clerk/nextjs'
import {
  createCheckoutSession,
  Metadata
} from '@/actions/createCheckoutSession'

export default function CartList() {
  const items = useCartStore((state) => state.items)

  const addItem = useCartStore((state) => state.addItem)

  const removeItem = useCartStore((state) => state.removeItem)

  const getTotalPrice = useCartStore((state) => state.getTotalPrice)

  const [isLoading, setIsLoading] = React.useState(false)

  const { isSignedIn, user } = useUser()

  const handleCheckout = async () => {
    if (!isSignedIn) return

    setIsLoading(true)

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user.fullName ?? 'Unknown',
        customerEmail: user.primaryEmailAddress?.emailAddress ?? 'Unknown',
        clerkUserId: user.id
      }

      // Create a checkout session
      const checkoutURL = await createCheckoutSession(items, metadata)

      // Redirect to the checkout page
      if (checkoutURL) {
        window.location.href = checkoutURL
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full flex gap-5 flex-col lg:flex-row">
      <div className="flex-grow">
        <ul className="flex flex-col w-full flex-grow divide-y divide-stone-700">
          {items.map((item) => {
            const totalPrice = item.quantity * (item.product.price ?? 0)
            return (
              <li
                key={item.product._id}
                className="py-5 gap-5 px-7 w-full flex items-center"
              >
                <div className="w-[70px] min-w-[70px] aspect-square overflow-hidden">
                  <picture>
                    <img
                      className="w-full h-full object-cover"
                      src={urlFor(item.product.images![0]).url()}
                      alt={item.product.name}
                    />
                  </picture>
                </div>
                <div className="w-full">
                  <Link
                    className="hover:underline"
                    href={'/products/' + item.product.slug?.current}
                  >
                    <h3>{item.product.name}</h3>
                  </Link>
                  {Array.isArray(item.product.description) && (
                    <p className="text-xs text-stone-400 pt-2 line-clamp-4">
                      {item.product.description
                        ?.map((desc) =>
                          desc._type === 'block'
                            ? desc.children
                                ?.map((child) => child.text)
                                .join(' ')
                            : ' '
                        )
                        .join(' ')}
                    </p>
                  )}
                  <div className="flex pt-2 items-center gap-3">
                    <p className="text-sm flex-grow">
                      {totalPrice?.toLocaleString('es-PE', {
                        style: 'currency',
                        currency: 'PEN',
                        currencyDisplay: 'symbol'
                      })}
                    </p>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => removeItem(item.product._id)}
                        className="border border-stone-400 p-1"
                      >
                        <GoChevronLeft size={15} />
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => addItem(item.product)}
                        className="border border-stone-400 p-1"
                      >
                        <GoChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        {items.length === 0 && (
          <p className="text-center p-10 text-sm">
            No hay productos en el carrito
          </p>
        )}
      </div>
      {items.length > 0 && (
        <footer className="max-lg:border-t max-lg:px-7 min-w-[400px] border-dotted max-lg:pt-5 max-lg:mt-5">
          <p className="font-larken">Resumen del orden</p>
          <div className="flex py-1 text-sm">
            <span className="flex flex-grow text-stone-400">Items:</span>
            <p>{items.length}</p>
          </div>
          <div className="flex py-1 text-sm border-t border-stone-700 pt-3 mt-3">
            <span className="flex flex-grow text-white text-lg">Total:</span>
            <p>
              {getTotalPrice().toLocaleString('es-PE', {
                style: 'currency',
                currency: 'PEN',
                currencyDisplay: 'symbol'
              })}
            </p>
          </div>
          {isSignedIn ? (
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full disabled:opacity-50 disabled:grayscale flex justify-between gap-2 items-center p-3 px-4 hover:bg-white/90 hover:scale-105 transition-all rounded-full bg-white text-black mt-5"
            >
              {isLoading ? (
                <>Procesando</>
              ) : (
                <>
                  Ordenar
                  <BsArrowRight size={20} />
                </>
              )}
            </button>
          ) : (
            <SignInButton mode="modal">
              <button className="w-full flex justify-center items-center p-3 px-4 hover:bg-white/90 hover:scale-105 transition-all rounded-full bg-white text-black mt-5">
                Inicia sesión para ordenar
              </button>
            </SignInButton>
          )}
        </footer>
      )}
    </div>
  )
}
