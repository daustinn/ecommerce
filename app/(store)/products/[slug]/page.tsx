import ProductSlug from '@/components/products/product'
import RelatedProducts from '@/components/products/related'
import { GET_PRODUCT_QUERYResult } from '@/sanity.types'
import { getProduct } from '@/sanity/lib/products/getProduct'
import React, { Suspense } from 'react'

export const dynamic = 'force-static'
export const revalidate = 60

export default async function ProductSlugPage({
  params
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params
  const product = (await getProduct(slug)) as GET_PRODUCT_QUERYResult
  return (
    <div className="max-w-7xl mx-auto w-full">
      <ProductSlug product={product} />
      <Suspense>
        <RelatedProducts product={product} />
      </Suspense>
    </div>
  )
}
