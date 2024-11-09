import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getAllProductsByCollectionSlug = async (
  collectionSlug: string,
  sorter?: string | undefined | null
) => {
  const sortes = {
    last_added: '_createdAt desc',
    price_asc: 'price asc',
    price_desc: 'price desc'
  }

  let sort = 'name asc'
  if (sorter && sorter in sortes) {
    sort = sortes[sorter as keyof typeof sortes]
  }

  const ALL_PRODUCTS_BY_COLLECTION_SLUG = defineQuery(`
    *[_type == "product" && references(*[_type == "collection" && slug.current == $collectionSlug]._id)]{
      _id,
      name,
      slug,
      images,
      price,
      stock,
      description,
      categories[]->{
        slug,
        title,
      }
    } | order(${sort})`)

  try {
    const products = await sanityFetch({
      query: ALL_PRODUCTS_BY_COLLECTION_SLUG,
      params: { collectionSlug }
    })

    return products.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
