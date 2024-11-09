import React from 'react'
import LeftCollection from './@sidebar'
import CollectionSidebarSort from './@sidebar-sort'
import BlackFridayBanner from '@/components/black-friday'

export default function LayoutCollections({
  children
}: Readonly<{
  children?: React.ReactNode
}>) {
  return (
    <div className="flex py-4 w-full">
      <LeftCollection />
      <section className="w-full">
        <BlackFridayBanner />
        {children}
      </section>
      <CollectionSidebarSort />
    </div>
  )
}
