import type { NextPage } from "next"
import { Component, ReactNode, useState } from "react"
import Sidebar from "../components/Sidebar"
import Image from "next/image"
import BigMac from "../assets/Big-Mac.jpg"
import QuarterPounderWithCheese from "../assets/Quarter-Pounder-with-Cheese.jpg"
import Cart from "../components/CompositeCart"
import Food from "./"
import router from "next/router"
import { useAppDispatch, useAppSelector } from "../store"
import { addSelectedFood } from "../store/food"
import {
  BunType,
  BurgerBuilder,
  OtherIngredientsType,
  PattyType,
} from "../components/burgerBuilder"
import BigMacLarge from "../assets/Big-Mac--large.jpg"
import BIgQuarterPounderImageLarge from "../assets/Quarter-Pounder-with-Cheese--large.png"
import CocaCola from "../assets/Coca-Cola.png"
import Fanta from "../assets/fanta-orange.png"
import DrPepper from "../assets/Dr-Pepper.png"
import Dasani from "../assets/Dasani-Water.png"
import DietCoke from "../assets/Diet-Coke.png"
import Sprite from "../assets/Sprite.png"
import FantLarge from "../assets/fanta-orange--large.png"
import SpriteLarge from "../assets/Sprite--large.png"
import CocaColaLarge from "../assets/Coca-Cola--large.png"
import DasaniLarge from "../assets/Dasani-Water--large.png"
import DietCokeLarge from "../assets/Diet-Coke--large.png"
import DRPepperLarge from "../assets/Dr-Pepper-large.png"
import { addSelectedDrink } from "../store/drink"

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

type FoodCardProps = {
  image: StaticImageData
  bigImage?: StaticImageData
  name: string
  majorIngredients: {
    patty: PattyType
    bun: BunType
  }
  otherIngredients: OtherIngredientsType[]
  optionalIngredients: OtherIngredientsType[]
  description?: string
  calories?: number
}

class FoodCards extends Component {
  items: FoodCardProps[] = [
    {
      name: "Big Mac",
      image: BigMac,
      bigImage: BigMacLarge,
      majorIngredients: {
        patty: "Meat Patty",
        bun: "Sessame Bun",
      },
      otherIngredients: [
        "Big Mac Sauce",
        "Shreded Lettuce",
        "American Cheese",
        "Pickles",
        "Onion",
      ],
      optionalIngredients: [
        "KetchUp",
        "Mustard",
        "Fries",
        "Apple Slices",
        "Strawberry Slushie",
      ],
      description: `
        Mouthwatering perfection starts with two 100% pure beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It’s topped off
            with pickles, crisp shredded lettuce, finely chopped onion and
            American cheese for a 100% beef burger with a taste like no other.
            It contains no artificial flavors, preservatives or added colors
            from artificial sources.
      `,
      calories: 550,
    },
    {
      name: "Quarter Pounder With Cheese",
      image: QuarterPounderWithCheese,
      bigImage: BIgQuarterPounderImageLarge,
      majorIngredients: {
        patty: "Meat Patty",
        bun: "Sessame Bun",
      },
      otherIngredients: [
        "American Cheese",
        "KetchUp",
        "Pickles",
        "American Cheese",
        "Onion",
        "Mustard",
      ],
      optionalIngredients: ["Fries", "Apple Slices", "Strawberry Slushie"],
      description: `
        Each Quarter Pounder® with Cheese burger features a ¼ lb.* of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun. Our QPC® contains no artificial flavors, preservatives or added colors from artificial sources.
      `,
      calories: 520,
    },
  ]
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

function FoodCard(props: FoodCardProps) {
  const dispatch = useAppDispatch()
  return (
    <div
      onClick={() => {
        dispatch(
          addSelectedFood(
            new BurgerBuilder(
              props.name,
              props.majorIngredients.patty,
              props.majorIngredients.bun,
              props.bigImage!,
              props.otherIngredients,
              props.optionalIngredients,
              props?.description || "",
              props.calories || 5
            )
          )
        )
        router.push(`/foods/${props.name}`)
      }}
      className="ml-5 mb-5 flex flex-col w-[229px] h-[338px] bg-white items-center cursor-pointer"
    >
      <Image src={props.image} alt="food Image" width={178} height={178} />
      <div className="mt-10">{props.name}</div>
    </div>
  )
}

export default Home

const Beverages = () => {
  const drinks = [
    {
      itemName: "Coca Cola",
      image: CocaCola,
      imageBig: CocaColaLarge,
      description:
        "Coca-Cola® is a refreshing McDonald's soda option that complements all of your menu favorites. Have you ever wondered, is Coke® at McDonald’s different? ",
    },
    {
      itemName: "Sprite",
      image: Sprite,
      imageBig: SpriteLarge,
      description: `
        Sprite® is a delicious lemon-lime fountain drink and is available in sizes extra small, small, medium, and large. Sprite® is a caffeine-free soda that makes the perfect addition to any McDonald’s Combo Meal.
      `
      
    },
    {
      itemName: "Dr Pepper",
      image: DrPepper,
      imageBig: DRPepperLarge,
      description: `
        McDonald's serves Dr Pepper®, the classic and refreshing fountain drink with a unique blend of 23 flavors. Dr Pepper® pairs perfectly with any of your favorite menu items. 
      `,
    },
    {
      itemName: "Fanta Orange",
      image: Fanta,
      imageBig: FantLarge,
      description: `
        McDonald’s Fanta® Orange is a caffeine-free soft drink full of bubbly, refreshing orange flavor. 
      `,
    },
    {
      itemName: "Diet Coke",
      image: DietCoke,
      imageBig: DietCokeLarge,
      description: `
        Try an icy cold Diet Coke®, with zero calories. It’s a staple to any McDonald's meal available on the $1 $2 $3 Dollar Menu. Wondering why Diet Coke® at McDonald’s tastes so good? 
      `,
    },
    {
      itemName: "Dasani Water",
      image: Dasani,
      imageBig: DasaniLarge,
      description: `
        DASANI is purified water enhanced with minerals for a pure, fresh taste.
      `,
    },
  ]

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

type DrinkCardProps = {
  itemName: string
  image: StaticImageData
  imageBig: StaticImageData
  description: string
}

const DrinkCard = (props: DrinkCardProps) => {
  const dispatch = useAppDispatch()
  return (
    <div
      className="ml-5 mb-5 flex flex-col w-[229px] h-[338px] bg-white items-center cursor-pointer"
      onClick={() => {
        dispatch(
          addSelectedDrink({
            name: props.itemName,
            imageBig: props.imageBig,
            description: props.description,
          })
        )
        router.push(`/drinks/${props.itemName}`)
      }}
    >
      <Image src={props.image} alt="food Image" width={178} height={178} />
      <div className="mt-10">{props.itemName}</div>
    </div>
  )
}
