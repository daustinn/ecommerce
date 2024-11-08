import ProductsHero from '@/components/products/hero'
import { getAllCategories } from '@/sanity/lib/categories/getAllCategories'
import { getAllProducts } from '@/sanity/lib/products/getAllProducts'
import React from 'react'

export default async function HomePage() {
  const products = await getAllProducts()
  const categories = await getAllCategories()

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //     `>>>> Rendered the home page cache with ${products.length} products and ${categories.length} categories`
  // )
  return (
    <div className="px-14">
      {/* <section>
        <article>
          <h1 className="text-3xl tracking-tight">
            Black friday sale! <span>🎉</span>
          </h1>
        </article>
      </section> */}
      <ProductsHero products={products} categories={categories} />
      {/* <ProductsHero products={products} />
      <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </div>
  )
}
