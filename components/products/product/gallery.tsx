'use client'

import { GET_PRODUCT_QUERYResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useState } from 'react'

export default function GalleryProduct({
  product
}: {
  product: GET_PRODUCT_QUERYResult
}) {
  if (!product) return null

  const [images] = useState<string[]>(
    product.images ? product.images.map((image) => urlFor(image).url()) : []
  )
  const [current, setCurrent] = useState(0)

  const altSeo =
    product.name + ' ' + product.description?.length
      ? product.description
          ?.map((desc) =>
            desc._type === 'block'
              ? desc.children?.map((child) => child.text).join(' ')
              : ' '
          )
          .join(' ')
      : ' '

  return (
    <div className="flex gap-14">
      <div className="flex flex-col gap-4">
        {images.slice(0, 6).map((image, index) => (
          <button
            onMouseEnter={() => setCurrent(index)}
            data-current={current === index ? '' : undefined}
            className="w-[80px] transition-colors data-[current]:outline-dotted outline-[2px] outline-offset-4 aspect-square overflow-hidden rounded-sm"
            key={index}
          >
            <Image
              width={100}
              height={100}
              src={image}
              alt={altSeo ?? product.name ?? ' '}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      <div className="w-[550px] h-[550px] flex justify-center max-w-full">
        <picture>
          <img
            src={images[current]}
            className="h-full w-auto max-w-full max-h-full object-contain"
            alt={altSeo}
          />
        </picture>
      </div>
    </div>
  )
}
