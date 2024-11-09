import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getProduct = async (slug: string) => {
  const GET_PRODUCT_QUERY = defineQuery(`
    *[_type == "product" && slug.current == $slug][0]
`)
  try {
    const product = await sanityFetch({
      query: GET_PRODUCT_QUERY,
      params: { slug }
    })
    return product.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
