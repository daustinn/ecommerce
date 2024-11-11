import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowSmallRight } from 'react-icons/hi2'
import { TiltCard } from '../framer/with3d'
import { Collection } from '@/sanity.types'

export default function HeroCollections({
  collections
}: {
  collections: Collection[]
}) {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {collections.map((collection) => {
          return <CollectionCard key={collection._id} collection={collection} />
        })}
      </div>
      <div className="flex justify-center pt-6">
        <Link
          href="/collections"
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          className="bg-blue-700 flex justify-center gap-2 hover:bg-blue-600 p-2 rounded-full px-4 text-white"
        >
          Ver todas las colecciones
          <HiOutlineArrowSmallRight size={25} />
        </Link>
      </div>
    </div>
  )
}

const CollectionCard = ({ collection }: { collection: Collection }) => {
  return (
    <TiltCard
      style={{
        backgroundColor: collection.backgroundColour?.value
      }}
      className="rounded-[10px] relative aspect-square group overflow-hidden"
    >
      <Link
        href={'/products?collection=' + collection.slug?.current}
        key={collection._id}
        title={'Ir a la coleccion' + collection.title}
        className="w-full h-full inline-block"
      >
        <div
          style={{
            transform: 'translateZ(75px)'
          }}
          className="absolute inset-0 flex items-end z-[1] bg-gradient-to-b"
        >
          <div className="lg:p-10 p-4">
            <h1 className="font-larken drop-shadow-[0_5px_8px_rgba(0,0,0,.4)] lg:text-6xl sm:text-2xl text-6xl tracking-tight">
              {collection.title}
            </h1>
            <div className="pt-5 hidden lg:flex items-center justify-between">
              <span className="text-sm drop-shadow-[0_2px_5px_rgba(0,0,0,.3)]">
                Ir a la colección
              </span>
              <div className="relative aspect-square group-hover:text-black">
                <span className="absolute -inset-3 duration-300 scale-0 group-hover:scale-100 transition-all rounded-full bg-white"></span>
                <HiOutlineArrowSmallRight size={25} className="relative" />
              </div>
            </div>
          </div>
        </div>
        <Image
          width={1000}
          height={1000}
          src={urlFor(collection.coverPhoto!).width(1000).url()}
          className="w-full h-full object-cover"
          alt={collection.title + ' cover photo'}
        />
      </Link>
    </TiltCard>
  )
}
