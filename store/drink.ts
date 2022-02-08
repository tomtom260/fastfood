import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BurgerBuilder, IngredientType } from "../components/burgerBuilder"

export type Food = {
  name: string
  ingredients: IngredientType[]
}

type SelectedDrinkType = {
  imageBig: StaticImageData
  name: string
  description: string
}

interface SelectedFoodState {
  selectedDrink: SelectedDrinkType | null
}

const initialState: SelectedFoodState = {
  selectedDrink: null,
}

export const drinkSlice = createSlice({
  name: "selectedDrink",
  initialState,
  reducers: {
    addSelectedDrink: (state, action: PayloadAction<SelectedDrinkType>) => {
      state.selectedDrink = action.payload
    },
  },
})

export const { addSelectedDrink } = drinkSlice.actions

export default drinkSlice.reducer
