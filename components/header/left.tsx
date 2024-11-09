'use client'

import React from 'react'
import { Category } from '@/sanity.types'
import PopularCategories from './categories'
import { CgMenuLeft } from 'react-icons/cg'

export default function LeftHeader({ categories }: { categories: Category[] }) {
  return (
    <nav className="flex-grow basis-0 text-sm">
      <button className="flex lg:hidden">
        <CgMenuLeft size={25} />
      </button>
      <div>
        <PopularCategories categories={categories} />
      </div>
    </nav>
  )
}
