/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductSlug from '@/components/products/product'
import { getProduct } from '@/sanity/lib/products/getProduct'
import React from 'react'

export default async function ProductSlugPage({
  params
}: {
  params: {
    slug: string
  }
}) {
  const { slug } = await params
  const product = await getProduct(slug)
  return (
    <div className="max-w-7xl mx-auto w-full">
      <ProductSlug product={product as any} />
    </div>
  )
}
