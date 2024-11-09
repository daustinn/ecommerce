import Hero from '@/components/hero'
import { getFourCollections } from '@/sanity/lib/collections/getFourCollections'

export default async function HomePage() {
  const collections = await getFourCollections()
  return (
    <div className="w-full">
      <Hero collections={collections} />
    </div>
  )
}
