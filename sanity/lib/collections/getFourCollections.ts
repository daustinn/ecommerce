import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getFourCollections = async () => {
  const FOUR_COLLECTIONS_QUERY = defineQuery(`
              *[_type == "collection"] | order(_editedAt asc)[0..3]
          `)

  try {
    const collections = await sanityFetch({
      query: FOUR_COLLECTIONS_QUERY
    })

    return collections.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
