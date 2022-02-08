import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IngredientType } from "../components/burgerBuilder"
import { v4 as uuidv4 } from "uuid"

export type CartItemType = {
  name: string
  ingredients?: IngredientType[] | null
  size?: string
  id: string
  quantity: number
  image: StaticImageData
  getPrice: () => number
}

export type AddToCartDto = Omit<CartItemType, "id">



type CartSliceType = {
  items: CartItemType[]
}

const initialState: CartSliceType = {
  items: []
}



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    addItem(state, action: PayloadAction<AddToCartDto>) {
      const id = uuidv4()
      const cartItem = { ...action.payload, id }
      state.items.push(cartItem)
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const index = state.items.findIndex(item => item.id === action.payload)
      state.items[index].quantity++
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (state.items[index].quantity !== 1) {
        state.items[index].quantity--
      }
    },
  },
})

export default cartSlice.reducer

export const { removeItem, addItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions
