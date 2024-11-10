import { Product } from '@/sanity.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  getItemCount: (productId: string) => number
  getGroupedItems: () => CartItem[]
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      // add item to cart
      addItem: (product) => {
        set((state) => {
          const alreadyInCart = state.items.find(
            (item) => item.product._id === product._id
          )

          if (!alreadyInCart)
            return { items: [...state.items, { product, quantity: 1 }] }

          return {
            items: state.items.map((item) =>
              item.product._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }
        })
      },

      // remove item from cart
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.product._id !== productId) acc.push(item)
            else if (item.quantity > 1)
              acc.push({ ...item, quantity: item.quantity - 1 })
            return acc
          }, [] as CartItem[])
        })),

      // clear cart
      clearCart: () => set({ items: [] }),

      // get total price
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + (item.product.price ?? 0) * item.quantity,
          0
        )
      },

      // get item count
      getItemCount: (productId) => {
        const item = get().items.find((item) => item.product._id === productId)
        return item ? item.quantity : 0
      },

      // get grouped items
      getGroupedItems: () => get().items
    }),
    {
      name: 'cart-storage'
    }
  )
)

export default useCartStore
