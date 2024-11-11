import ProductCard from '@/components/products/product-card'
import { AskingQuestion } from '@/icons/asking-question'
import { GET_PRODUCTS_QUERYResult } from '@/sanity.types'
import { getProducts } from '@/sanity/lib/products/getProducts'
import React, { Suspense } from 'react'

export const dynamic = 'force-static'
export const revalidate = 60

export default async function ProductsPage({
  searchParams
}: {
  searchParams: {
    q?: string | null | undefined
    category: string | null | undefined
    collection: string | null | undefined
    sort: string | null | undefined
  }
}) {
  const { sort, category, collection, q } = await searchParams

  const products = (await getProducts({
    category,
    collection,
    q,
    sorter: sort
  })) as GET_PRODUCTS_QUERYResult

  return (
    <Suspense key={`${category}-${sort}-${collection}-${q}`}>
      {products.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 divide-x divide-stone-700 divide-dotted divide-y max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      ) : (
        <div className="p-10 text-center text-stone-300">
          <AskingQuestion className="mx-auto" width={100} />
          <h2 className="font-larken pt-5 text-2xl tracking-tight">
            Oops! <br />
          </h2>
          <p className="text-sm">
            No se encontraron productos con los filtros seleccion
          </p>
        </div>
      )}
    </Suspense>
  )
}
