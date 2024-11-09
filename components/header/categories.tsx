import { getPopularCategories } from '@/sanity/lib/categories/getPopularCategories'
import Link from 'next/link'
import React from 'react'

export default async function PopularCategories() {
  const categories = await getPopularCategories()
  return (
    <ul className="flex [&>li>a]:px-4 hover:[&>li>a]:underline text-stone-300">
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={'/categories/' + category.slug?.current}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
