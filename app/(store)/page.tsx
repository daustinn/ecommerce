import Hero from '@/components/hero'
import Banners from '@/components/hero/banners'
import HeroCollections from '@/components/hero/collections'
import { getFourCollections } from '@/sanity/lib/collections/getFourCollections'

export const dynamic = 'force-static'
export const revalidate = 60

export default async function HomePage() {
  const collections = await getFourCollections()
  return (
    <div className="w-full flex flex-col flex-grow">
      <Hero />
      <Banners />
      <HeroCollections collections={collections} />
    </div>
  )
}
