import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getPopularCategories = async () => {
  const ALL_POPULAR_CATEGORIES_QUERY = defineQuery(`
            *[_type == "category" && visible == true] | order(_createdAt asc)[0..10]
        `)

  try {
    const categories = await sanityFetch({
      query: ALL_POPULAR_CATEGORIES_QUERY
    })

    return categories.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
