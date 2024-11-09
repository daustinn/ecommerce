'use client'

import { Collection } from '@/sanity.types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function CollectionSidebarClient({
  collections
}: {
  collections: Collection[]
}) {
  const pathname = usePathname()
  return (
    <ul className="flex flex-col gap-3 text-stone-50">
      {collections.map((collection) => (
        <li key={collection._id}>
          <Link
            data-selected={
              pathname.endsWith(collection.slug?.current ?? '')
                ? 'true'
                : undefined
            }
            replace
            className="hover:underline data-[selected]:underline text-nowrap hover:text-stone-100 data-[selected]:text-stone-50 py-1 px-2 rounded-full"
            href={'/collections/' + collection.slug?.current}
          >
            {collection.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
