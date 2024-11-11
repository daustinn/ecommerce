import { GET_PRODUCT_QUERYResult } from '@/sanity.types'
import React from 'react'
import GalleryProduct from './gallery'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import AddButtonProduct from './add-button'

export default function ProductSlug({
  product
}: {
  product: GET_PRODUCT_QUERYResult
}) {
  if (!product) return null

  return (
    <div className="relative group flex group p-8">
      <GalleryProduct product={product} />
      <div className="px-10">
        <h1 className="text-3xl">{product.name}</h1>
        <div className="flex flex-wrap gap-2 pt-3">
          {product.categories?.map((category) => (
            <Link
              href={`/products?category=${category.slug?.current}`}
              key={category._id}
              className="text-sm text-stone-300 hover:underline"
            >
              {category.title}
            </Link>
          ))}
        </div>
        <p className="py-4 text-3xl font-light">
          {product.price?.toLocaleString('es-PE', {
            style: 'currency',
            currency: 'PEN',
            currencyDisplay: 'symbol'
          })}
        </p>
        <div>
          <AddButtonProduct product={product} />
        </div>
        <div className="prose pt-10">
          {Array.isArray(product.description) && (
            <PortableText value={product.description} />
          )}
        </div>
      </div>
    </div>
  )
}
