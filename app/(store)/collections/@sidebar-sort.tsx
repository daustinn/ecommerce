'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const sorts = {
  last_added: 'Últimos añadidos',
  price_asc: 'Precio: Menor a mayor',
  price_desc: 'Precio: Mayor a menor'
}

export default function CollectionSidebarSort() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSort = (sort: string) => {
    const currentSearchParams = new URLSearchParams(
      Array.from(searchParams.entries())
    )
    if (searchParams.get('sort') === sort) {
      currentSearchParams.delete('sort')
    } else currentSearchParams.set('sort', sort)
    const search = currentSearchParams.toString()
    const query = search ? `?${search}` : ''
    router.push(`${pathname}${query}`)
  }

  const currentSort = searchParams.get('sort')

  return (
    <aside className="p-12 pt-0 md:block hidden">
      <h2 className="text-sm text-stone-400 text-nowrap pb-4">Ordenar por</h2>
      <ul className="flex flex-col gap-2">
        {Object.entries(sorts).map(([key, value]) => (
          <li key={key}>
            <button
              data-active={currentSort === key ? 'true' : undefined}
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
