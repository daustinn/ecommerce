import { getAllCollections } from '@/sanity/lib/collections/getAllCollections'
import React from 'react'
import CollectionSidebarClient from './@sidebar-client'

export default async function CollectionSidebar() {
  const collections = await getAllCollections()
  return (
    <aside className="p-12 pt-0 md:block hidden">
      <h2 className="text-sm text-stone-400 pb-5 pl-2">Colecciones</h2>
      <CollectionSidebarClient collections={collections} />
    </aside>
  )
}
