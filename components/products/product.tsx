import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

export default function ProductCart({ product }: { product: Product }) {
  return (
    <a href={`/product/${product.slug?.current}`} className="group">
      <div>
        <div className="overflow-hidden aspect-square rounded-xl">
          <Image
            width={300}
            className="w-full group-hover:scale-110 transition-transform h-full object-cover"
            src={urlFor(product.image!).width(300).height(300).url()}
            alt={product.name || 'Product image'}
          />
          {/* <pre>{JSON.stringify(product.image, null, 2)}</pre> */}
        </div>
        <div className="flex items-start py-3 px-1">
          <div className="overflow-ellipsis flex-grow ">
            <h2 className="text-ellipsis flex-grow line-clamp-1 font-medium">
              {product.name}
            </h2>
            <span className="text-sm text-stone-300 hover:underline hover:text-blue-500">
              T-shirt
            </span>
          </div>
          <p className="font-light text-stone-300">£{product.price}</p>
        </div>
      </div>
    </a>
  )
}
