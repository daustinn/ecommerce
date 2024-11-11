'use client'

import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'
import { AnimatedText } from '../framer/animated-text'

export default function HeroTenProducts({ products }: { products: Product[] }) {
  return (
    <div>
      <section className="h-svh grid place-content-center">
        <AnimatedText
          once
          text="Tu outfit perfecto"
          el="h1"
          className="text-center text-stone-100 font-larken mb-4 text-[120px] tracking-tighter"
        />
        <AnimatedText
          el="h2"
          once
          text="Es momento de renovar tu closet con las últimas y mejores tendencias."
          className="text-stone-300 mx-auto text-center"
        />
      </section>
      <section className="flex flex-col py-10">
        <div>
          <div className="flex gap-4 overflow-x-auto">
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export const ProductCard = ({ product }: { product: Product }) => {
  const thumbnail = product.images?.[0]
  const imageTwo = product.images?.[1]
  const [hover, setHover] = React.useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={`/products/${product.slug?.current}`}
      className="group flex flex-col gap-2"
    >
      <div className="relative w-[200px] aspect-square rounded-[30px] overflow-hidden">
        <picture>
          <img
            src={
              hover
                ? urlFor(imageTwo!).width(400).url()
                : urlFor(thumbnail!).width(400).url()
            }
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <h1 className="line-clamp-1 text-stone-300 text-lg text-ellipsis">
        {product.name}
      </h1>
      <h2>
        {product.price?.toLocaleString('en-EU', {
          style: 'currency',
          currency: 'USD',
          currencyDisplay: 'symbol'
        })}
      </h2>
    </Link>
  )
}
