import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BurgerBuilder, IngredientType } from "../components/burgerBuilder"

export type Food = {
  name: string
  ingredients: IngredientType[]
}

interface SelectedFoodState {
  selectedFoodBuilder: BurgerBuilder | null
}

// Define the initial state using that type
const initialState: SelectedFoodState = {
  selectedFoodBuilder: null,
}

export const foodSlice = createSlice({
  name: "selectedFood",
  initialState,
  reducers: {
    addSelectedFood: (state, action: PayloadAction<BurgerBuilder>) => {
      state.selectedFoodBuilder = action.payload
    },
  },
})

export const { addSelectedFood } = foodSlice.actions

export default foodSlice.reducer
