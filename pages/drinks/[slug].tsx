import React, { useState } from "react"
import Image from "next/image"
import Router from "next/router"
import { useAppDispatch, useAppSelector } from "../../store"
import { addItem } from "../../store/cart"
import { DrinkCartAdapter } from "../../utils/DrinkCartAdapter"
import DecoratedCommandButton from "../../components/DecoratedButton"
import { Drink } from "../../models/Drink"
import RoundButton from "../../components/DecoratedRoundButton"

enum DrinkTypeEnum {
  L = "L",
  M = "M",
  S = "S",
}

const DrinkInfo: {
  [key in DrinkTypeEnum]: { price: number; calories: number; type: string }
} = {
  L: {
    price: 20,
    calories: 300,
    type: "large",
  },
  M: {
    price: 15,
    calories: 225,
    type: "medium",
  },
  S: {
    price: 10,
    calories: 150,
    type: "small",
  },
}

export function DrinkComp() {
  const [size, setSize] = useState<DrinkTypeEnum>(DrinkTypeEnum.M)
  const drink = DrinkInfo[size]
  const dispatch = useAppDispatch()

  const selectedItem = useAppSelector(state => state.drink.selectedDrink)
  return (
    <div className="bg-white">
      <div className="flex justify-evenly my-16 ">
        <div className="flex-shrink-0">
          <Image
            src={selectedItem?.imageBig!}
            alt="Drink"
            width={640}
            height={370}
          />
        </div>
        <div className="w-2/5 ">
          <h1 className="text-6xl font-bold">{selectedItem?.name}</h1>
          <p className="mt-5 mb-5 text-4xl">{drink.price} ETB</p>
          <div>
            <p className="text-4xl font-bold mb-8">Change your size</p>
            <div className="flex my-4 flex-row">
              {Object.values(DrinkTypeEnum).map(el => (
                <RoundButton
                  key={el}
                  onClick={() => setSize(el)}
                  active={size === el}
                >
                  {el}
                </RoundButton>
              ))}
            </div>
          </div>
          <p className=" text-lg">{selectedItem?.description}</p>
        </div>
      </div>

      <div className="mt-16">
        <DecoratedCommandButton
          containerStyle="mx-auto w-48 mt-32"
          onClick={() => {
            Router.push("/")
            dispatch(
              addItem(
                DrinkCartAdapter.addItem(
                  new Drink(
                    selectedItem?.name!,
                    drink.price,
                    drink.type,
                    selectedItem?.imageBig
                  )
                )
              )
            )
          }}
        >
          Add to Cart
        </DecoratedCommandButton>
      </div>
    </div>
  )
}

export default DrinkComp
