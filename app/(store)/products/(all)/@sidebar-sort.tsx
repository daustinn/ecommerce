'use client'

import { useSearchParams } from '@/hooks/use-search-params'
import React from 'react'

const sorts = {
  last_added: 'Últimos añadidos',
  price_asc: 'Precio: Menor a mayor',
  price_desc: 'Precio: Mayor a menor'
}

export default function CollectionSidebarSort() {
  const [searchParams, handleSort] = useSearchParams('sort')
  const currentSort = searchParams.get('sort')

  return (
    <aside className="p-12 pt-0 md:block hidden">
      <h2 className="text-sm text-stone-400 text-nowrap pb-4">Ordenar por</h2>
      <ul className="flex flex-col gap-2">
        {Object.entries(sorts).map(([key, value]) => (
          <li key={key}>
            <button
              data-active={currentSort === key ? '' : undefined}
              onClick={() => handleSort(key)}
              className="text-stone-300 text-nowrap hover:underline data-[active]:underline data-[active]:text-white"
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
