import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductThumb({ product }: { product: Product }) {
  return (
    <Link href="/" className="group inline-block">
      <div className="overflow-hidden aspect-square rounded-xl">
        <Image
          width={300}
          height={300}
          className="w-full group-hover:scale-110 transition-transform h-full object-cover"
          src={urlFor(product.images![0]).width(300).height(300).url()}
          alt={product.name || 'Product image'}
        />
        {/* <pre>{JSON.stringify(product.image, null, 2)}</pre> */}
      </div>
    </Link>
  )
}
