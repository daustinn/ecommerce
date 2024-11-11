import { GET_PRODUCT_QUERYResult, Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import { getRelatedProduct } from '@/sanity/lib/products/getRelatedProduct'
import Link from 'next/link'
import React from 'react'

type Props = {
  product: GET_PRODUCT_QUERYResult
}

export default async function RelatedProducts({ product }: Props) {
  if (!product) return null

  const slugs = product.categories?.map(
    (category) => category.slug?.current as string
  )

  const allRelatedProducts = (await getRelatedProduct(slugs)) as Product[]

  const products = allRelatedProducts.filter(
    (relatedProduct) => relatedProduct._id !== product._id
  )

  if (!products.length) return null

  return (
    <footer className="border-t px-5 border-dotted border-stone-500">
      <h1 className="text-xl py-4 font-larken">Productos relacionados</h1>
      <div className="flex gap-4 ">
        {products.map((product) => {
          return (
            <Link
              className="w-[200px] inline-block"
              href={`/products/${product.slug?.current}`}
              key={product._id}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={urlFor(product.images!).url()}
                  alt={product.name ?? ''}
                />
              </div>
              <p className="line-clamp-2 text-sm pt-2">{product.name}</p>
              <p className="py-2 text-xl font-light">
                {product.price?.toLocaleString('es-AR', {
                  style: 'currency',
                  currency: 'ARS',
                  currencyDisplay: 'symbol'
                })}
              </p>
            </Link>
          )
        })}
      </div>
    </footer>
  )
}
