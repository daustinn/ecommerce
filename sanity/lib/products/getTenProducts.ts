import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getTenProducts = async () => {
  const TEN_PRODUCTS_QUERY = defineQuery(`
              *[_type == "product"] | order(_createdAt desc)[0..9]
          `)
  try {
    const products = await sanityFetch({
      query: TEN_PRODUCTS_QUERY
    })

    return products.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
