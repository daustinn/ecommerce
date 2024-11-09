/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCart from '@/components/products/product'
import { ALL_PRODUCTS_BY_COLLECTION_SLUGResult } from '@/sanity.types'
import { getAllProductsByCollectionSlug } from '@/sanity/lib/products/getAllProductsByColletion'
import React, { Suspense } from 'react'

export default async function CollectionsPageSlug({
  params,
  searchParams
}: {
  params: {
    slug: string
  }
  searchParams: {
    sort: string | undefined | null
  }
}) {
  const { slug } = await params
  const { sort } = await searchParams
  const products = (await getAllProductsByCollectionSlug(
    slug,
    sort
  )) as ALL_PRODUCTS_BY_COLLECTION_SLUGResult
  return (
    <Suspense key={`${slug}-${sort}`}>
      <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-stone-700 divide-dotted divide-y max-w-4xl mx-auto">
        {products.map((product) => (
          <ProductCart product={product} key={product._id} />
        ))}
      </div>
    </Suspense>
  )
}
