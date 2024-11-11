import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getProduct = async (slug: string) => {
  const GET_PRODUCT_QUERY = defineQuery(`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      price,
      stock,
      description,
      images,
      categories[]->{
        _id,
        slug,
        title
      }
    }
`)
  try {
    const product = await sanityFetch({
      query: GET_PRODUCT_QUERY,
      params: { slug }
    })
    return product.data || null
  } catch (error) {
    console.error(error)
    return []
  }
}
