import type { NextPage } from "next"
import { Component, ReactNode, useState } from "react"
import Sidebar from "../components/Sidebar"
import Cart from "../components/CompositeCart"
import { useAppSelector } from "../store"
import { FoodCardProps } from "../utils/burgerBuilder"
import DrinkCard from "../components/DrinkCard"
import FoodCard from "../components/FoodCard"
import { burgerItems, drinkItems } from "../utils/constants"

const Home: NextPage = () => {
  const selectedSection = useAppSelector(state => state.home.selectedSection)
  return (
    <div className="flex bg-white ">
      <div className="flex w-[calc(100%-350px)]  flex-col mt-20 pl-10">
        <Sidebar />
        {selectedSection === "burgers" ? <FoodCards /> : <Beverages />}
      </div>
      <Cart />
    </div>
  )
}

class FoodCards extends Component {
  items: FoodCardProps[] = burgerItems
  render(): ReactNode {
    return (
      <div className=" flex mt-16 flex-col w-full">
        <h1 className="font-bold text-6xl self-center mb-10">Burgers</h1>
        <div className="flex  flex-wrap">
          {this.items.map(item => (
            <FoodCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    )
  }
}

const Beverages = () => {
  const drinks = drinkItems

  return (
    <div className=" flex mt-16 flex-col w-full">
      <h1 className="font-bold text-6xl self-center mb-10">Beverages</h1>
      <div className="flex  flex-wrap">
        {drinks.map(drink => (
          <DrinkCard key={drink.itemName} {...drink} />
        ))}
      </div>
    </div>
  )
}

export default Home
