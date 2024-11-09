import React from 'react'
import { getAllCategories } from '@/sanity/lib/categories/getAllCategories'
import CollectionSidebarCategories from './@sidebar-categories'
import { getAllCollections } from '@/sanity/lib/collections/getAllCollections'
import CollectionSidebarCollections from './@sidebar-collections'
import Search from './@search'

export default async function LeftCollection() {
  const categories = await getAllCategories()
  const collections = await getAllCollections()
  return (
    <aside className="p-12 pt-0 md:block hidden">
      <h2 className="text-sm text-stone-400 pb-5 pl-2">Buscar</h2>
      <Search />
      <h2 className="text-sm text-stone-400 pb-5 pl-2 pt-10">Categorias</h2>
      <CollectionSidebarCategories categories={categories} />
      <h2 className="text-sm text-stone-400 pb-5 pl-2 pt-10">Colecciones</h2>
      <CollectionSidebarCollections collections={collections} />
    </aside>
  )
}
