import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import cartReducer from "./cart"
import foodReducer from "./food"
import homeReducer from "./homeSlice"
import drinkReducer from "./drink"

export const store = configureStore({
  reducer: {
    selectedFood: foodReducer,
    cart: cartReducer,
    home: homeReducer,
    drink: drinkReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
