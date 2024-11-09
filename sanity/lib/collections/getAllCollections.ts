import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getAllCollections = async () => {
  const ALL_COLLECTIONS_QUERY = defineQuery(`
            *[_type == "collection"] | order(_createdAt desc)
        `)

  try {
    const collections = await sanityFetch({
      query: ALL_COLLECTIONS_QUERY
    })

    return collections.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
