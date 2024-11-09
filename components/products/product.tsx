import { ALL_PRODUCTS_BY_COLLECTION_SLUGResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCart({
  product
}: {
  product: ALL_PRODUCTS_BY_COLLECTION_SLUGResult[0]
}) {
  return (
    <div className="relative flex flex-col group overflow-hidden p-8">
      <a
        href={`/product/${product.slug?.current}`}
        className="absolute inset-0 z-[1]"
      />
      <div className="overflow-hidden aspect-[6/5]">
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
        {/* {product.description?.length && (
          <p className="text-xs text-stone-400 line-clamp-2 ">
            {product.description?.map((block) =>
              block._type === 'block'
                ? block.children?.map((child) => child.text).join('')
                : ''
            )}
          </p>
        )} */}
        <Link
          href={`/categories/${product.categories?.[0].slug?.current}`}
          className="text-xs z-[1] relative text-blue-500 hover:underline"
        >
          {product.categories?.[0].title}
        </Link>
        <p className="font-light text-lg">
          {product.price?.toLocaleString('en-EU', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol'
          })}
        </p>
      </div>
    </div>
  )
}
