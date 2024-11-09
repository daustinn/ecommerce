import Hero from '@/components/hero'
// import HeroTenProducts from '@/components/hero/products'
import { getFourCollections } from '@/sanity/lib/collections/getFourCollections'
// import { getTenProducts } from '@/sanity/lib/products/getTenProducts'
import React from 'react'

export default async function HomePage() {
  const collections = await getFourCollections()
  // const products = await getTenProducts()

  return (
    <div className="w-full">
      <Hero collections={collections} />
      {/* <HeroTenProducts products={products} /> */}
    </div>
  )
}
