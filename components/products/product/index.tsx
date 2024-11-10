import { GET_PRODUCT_QUERYResult } from '@/sanity.types'
import React from 'react'
import GalleryProduct from './gallery'
import { PortableText } from 'next-sanity'

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
        <p className="py-4 text-3xl font-light">
          {product.price?.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
            currencyDisplay: 'symbol'
          })}
        </p>
        <div>
          <button className="py-3 px-5 bg-white rounded-full text-black">
            Agregar al carrito
          </button>
        </div>
        <div className="prose">
          {Array.isArray(product.description) && (
            <PortableText value={product.description} />
          )}
        </div>
      </div>
    </div>
  )
}
