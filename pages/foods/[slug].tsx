import React, { Component, useState } from "react"

import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../store"
import {
  BurgerBuilder,
  IngredientType,
  OtherIngredientsType,
} from "../../components/burgerBuilder"
import router from "next/router"
import { addItem } from "../../store/cart"
import { FoodCartAdapter } from "../../utils/FoodToCartAdapter"
import DecoratedCommandButton from "../../components/DecoratedButton"
import Ingredient from "../../components/Ingredients"

export function Food() {
  const FoodBuilder = useSelector<RootState, BurgerBuilder>(
    state => state.selectedFood.selectedFoodBuilder!
  )

  const ingredients = [
    ...FoodBuilder.burger.mainIngredients,
    ...FoodBuilder.burger.otherIngredients,
  ]

  const [selectedIngredients, setSelectedIngredients] =
    useState<IngredientType[]>(ingredients)
  const dispatch = useAppDispatch()

  const [omitedIngredients, setOmitedIngredients] = useState<IngredientType[]>(
    FoodBuilder.burger.optionalIngredients
  )
  return (
    <div className="bg-white my-16">
      <div className="flex justify-evenly">
        <div className="flex-shrink-0">
          <Image
            src={FoodBuilder.burger.image}
            alt="Burger"
            width={640}
            height={370}
          />
        </div>
        <div className="w-2/5 ">
          <h1 className="text-6xl font-bold">{FoodBuilder.burger.name}</h1>
          <p className="mt-5 mb-5 text-4xl">{FoodBuilder.calories} Cal.</p>
          <p className=" text-lg">{FoodBuilder.description}</p>
        </div>
      </div>
      <div className="flex flex-col  mt-10">
        <h2 className="font-bold text-3xl self-center">
          Ingredients in the {FoodBuilder.burger.name}
        </h2>
        <div className="flex overflow-auto px-20 mt-16">
          {selectedIngredients.map(ing => (
            <Ingredient
              onClick={() => {
                setSelectedIngredients(ingredients =>
                  ingredients.filter(ingredient => ingredient.name !== ing.name)
                )
                setOmitedIngredients(ingredients => [...ingredients, ing])
                FoodBuilder.removeIngredient(ing.name as OtherIngredientsType)
              }}
              optional={!FoodBuilder.burger.mainIngredients.includes(ing)}
              selected
              key={ing.name}
              {...ing}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col  mt-10">
        <h2 className="font-bold text-3xl self-center">
          Optional Ingredients in the {FoodBuilder.burger.name}
        </h2>
        <div className="flex overflow-auto px-20 mt-16">
          {omitedIngredients.map(ing => (
            <Ingredient
              onClick={() => {
                setOmitedIngredients(ingredients =>
                  ingredients.filter(ingredient => ingredient.name !== ing.name)
                )
                setSelectedIngredients(ingredients => [...ingredients, ing])
                FoodBuilder.addOtherIngredient(ing.name as OtherIngredientsType)
              }}
              key={ing.name}
              optional
              selected={false}
              name={ing.name}
              image={ing.image}
            />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <DecoratedCommandButton
          containerStyle="mx-auto w-48"
          onClick={() => {
            router.push("/")
            dispatch(addItem(FoodCartAdapter.addItem(FoodBuilder.build())))
          }}
        >
          Add to Cart
        </DecoratedCommandButton>
      </div>
    </div>
  )
}

export default Food
