import { Category, Product } from '@/sanity.types'
import React from 'react'
import ProductThumb from './product-thumb'

interface Props {
  products: Product[]
  categories: Category[]
}

export default function ProductsHero({ products }: Props) {
  return (
    <section>
      {/* <div>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </div> */}
      <div className="grid gap-4 grid-cols-5">
        {products.map((product) => (
          <ProductThumb product={product} key={product._id} />
        ))}
      </div>
    </section>
  )
}
