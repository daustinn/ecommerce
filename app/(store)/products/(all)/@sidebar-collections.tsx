'use client'

import { useSearchParams } from '@/hooks/use-search-params'
import { Collection } from '@/sanity.types'
import React from 'react'

export default function CollectionSidebarCollections({
  collections
}: {
  collections: Collection[]
}) {
  const [searchParams, handleSearch] = useSearchParams('collection')
  const currentSearch = searchParams.get('collection')

  return (
    <ul className="flex flex-col gap-1 text-stone-50">
      {collections.map((collection) => (
        <li key={collection._id}>
          <button
            data-selected={
              currentSearch === collection.slug?.current ? '' : undefined
            }
            onClick={() => handleSearch(collection.slug?.current ?? '')}
            className="hover:underline group flex items-center gap-2 data-[selected]:underline text-nowrap hover:text-stone-100 data-[selected]:text-stone-50 py-1 px-2 rounded-full"
          >
            <div className="w-3 group-hover:outline-blue-600 group-data-[selected]:bg-blue-700 group-data-[selected]:outline-blue-700 outline-stone-700 aspect-square outline-[1px] outline outline-offset-2"></div>
            {collection.title}
          </button>
        </li>
      ))}
      {currentSearch && (
        <li className="pl-6">
          <button
            onClick={() => handleSearch(currentSearch)}
            className="text-xs text-blue-600"
          >
            Quita elección
          </button>
        </li>
      )}
    </ul>
  )
}
