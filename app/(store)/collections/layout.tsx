import React from 'react'
import CollectionSidebar from './@sidebar'
import CollectionSidebarSort from './@sidebar-sort'

export default function LayoutCollections({
  children
}: Readonly<{
  children?: React.ReactNode
}>) {
  return (
    <div className="flex py-4 w-full">
      <CollectionSidebar />
      <section className="w-full">{children}</section>
      <CollectionSidebarSort />
    </div>
  )
}
