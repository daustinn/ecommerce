'use client'

import { Category } from '@/sanity.types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function PopularCategoriesMobile({
  categories
}: {
  categories: Category[]
}) {
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('category')
  return (
    <div className="p-5">
      <ul className="flex flex-col [&>li>a]:px-4 hover:[&>li>a]:underline text-stone-300">
        {categories.map((category) => (
          <li key={category._id}>
            <Link
              data-active={
                category.slug?.current === currentCategory ? '' : undefined
              }
              className="data-[active]:underline p-2 py-3 text-2xl font-larken block data-[active]:text-blue-600"
              href={'/products?category=' + category.slug?.current}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
