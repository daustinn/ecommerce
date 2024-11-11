import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getRelatedProduct = async (categories: string[] = []) => {
  const GET_RELATED_PRODUCT_QUERY = defineQuery(`
   *[_type == "product" 
      && stock > 0 
      && count(categories[_ref in *[_type == "category" 
      && slug.current in $categorySlugs]._id]) > 0
    ]{
          _id,
          name,
          slug,
          images[0],
          price,
          stock
      } | order(name asc)
  `)

  try {
    const products = await sanityFetch({
      query: GET_RELATED_PRODUCT_QUERY,
      params: {
        categorySlugs: categories
      }
    })
    return products.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
