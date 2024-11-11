import { GET_PRODUCTS_QUERYResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({
  product
}: {
  product: GET_PRODUCTS_QUERYResult[0]
}) {
  const exhaustive = product.stock === 0
  return (
    <div
      data-exhaustive={exhaustive ? 'true' : undefined}
      className="relative flex data-[exhaustive]:opacity-60 data-[exhaustive]:grayscale flex-col group overflow-hidden p-8"
    >
      <Link
        href={`/products/${product.slug?.current}`}
        className="absolute inset-0 z-[1]"
      />
      <div className="overflow-hidden relative aspect-[6/5]">
        {exhaustive && (
          <div className="w-full absolute bg-stone-500/80 grid place-content-center text-white text-xl h-full inset-0">
            <p>Agotado</p>
          </div>
        )}
        <Image
          width={300}
          height={300}
          className="w-full group-hover:scale-110 transition-transform h-full object-cover"
          src={urlFor(product.images![0]).width(300).height(300).url()}
          alt={product.name || 'Product image'}
        />
      </div>
      <div className="overflow-ellipsis flex-grow pt-2 gap-2 flex flex-col">
        <h2 className="text-ellipsis flex-grow line-clamp-1 text-lg font-medium">
          {product.name}
        </h2>
        <Link
          href={`/categories/${product.categories?.[0].slug?.current}`}
          className="text-xs z-[1] relative text-blue-500 hover:underline"
        >
          {product.categories?.[0].title}
        </Link>
        <p className="font-light text-lg">
          {product.price?.toLocaleString('es-PE', {
            style: 'currency',
            currency: 'PEN',
            currencyDisplay: 'symbol'
          })}
        </p>
      </div>
    </div>
  )
}
