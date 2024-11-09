import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const searchProducts = async (searchTerm: string) => {
  const SEARCH_PRODUCT_QUERY = defineQuery(`
            *[
              _type == "product" 
              && (name match $searchTerm 
              || pt::text(description) match $searchTerm)
              ] | order(name asc)
        `)

  try {
    const products = await sanityFetch({
      query: SEARCH_PRODUCT_QUERY,
      params: {
        searchTerm: `*${searchTerm}*`
      }
    })

    return products.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
