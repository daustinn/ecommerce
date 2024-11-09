import { GET_PRODUCT_QUERYResult } from '@/sanity.types'
import React from 'react'

export default function ProductSlug({
  product
}: {
  product: GET_PRODUCT_QUERYResult
}) {
  if (!product) return null

  const exhaustive = product.stock === 0
  return (
    <div
      data-exhaustive={exhaustive ? 'true' : undefined}
      className="relative flex data-[exhaustive]:opacity-60 data-[exhaustive]:grayscale flex-col group overflow-hidden p-8"
    >
      <div className="overflow-ellipsis flex-grow pt-2 gap-2 flex flex-col">
        <h2 className="text-ellipsis flex-grow line-clamp-1 text-lg font-medium">
          {product.name}
        </h2>
        {/* <Link
          href={`/categories/${product.categories.[0].slug.current}`}
          className="text-xs z-[1] relative text-blue-500 hover:underline"
        >
          {product.categories.[0].title}
        </Link>
        <p className="font-light text-lg">
          {product.price.toLocaleString('en-EU', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol'
          })}
        </p> */}
      </div>
    </div>
  )
}
