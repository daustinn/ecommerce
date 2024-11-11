import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export async function getMyOrders(userId: string) {
  // Check if the user id is provided
  if (!userId) {
    throw new Error('User Id is required')
  }
  // Define the query
  const GET_MY_ORDERS_QUERY = defineQuery(`
        *[_type == "order" && clerkUserId == $userId] | order(_createdAt desc) {
            ...,
            products[]{
                ...,
                product->
            }
        }
    `)

  try {
    // Fetch the orders
    const orders = await sanityFetch({
      query: GET_MY_ORDERS_QUERY,
      params: { userId }
    })
    return orders.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}
