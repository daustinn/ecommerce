import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
            *[_type == "category"  && visible == true] | order(name asc)
        `)

  try {
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY
    })

    return categories.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
