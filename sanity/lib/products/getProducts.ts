import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export const getProducts = async ({
  q,
  sorter,
  category,
  collection
}: {
  q?: string | null | undefined
  sorter?: string | null | undefined
  category?: string | null | undefined
  collection?: string | null | undefined
}) => {
  const sortes = {
    last_added: '_createdAt desc',
    price_asc: 'price asc',
    price_desc: 'price desc'
  }

  let sort = 'name asc'
  if (sorter && sorter in sortes) {
    sort = sortes[sorter as keyof typeof sortes]
  }

  let filters = `_type == "product"`
  if (q)
    filters += ` && (name match $searchTerm || pt::text(description) match $searchTerm)`
  if (category)
    filters += ` && references(*[_type == "category" && slug.current == $categorySlug]._id)`
  if (collection)
    filters += ` && references(*[_type == "collection" && slug.current == $collectionSlug]._id)`

  const GET_PRODUCTS_QUERY = defineQuery(`
    *[${filters}]{
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
    } | order(${sort})
  `)

  try {
    const products = await sanityFetch({
      query: GET_PRODUCTS_QUERY,
      params: {
        searchTerm: q ? `*${q}*` : null,
        collectionSlug: collection || null,
        categorySlug: category || null
      }
    })

    return products.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
