import MeatPatty from "../assets/patty.png"
import SessameBun from "../assets/sessame_bun.png"
import RegularBun from "../assets/regular_bun.png"
import Tomato from "../assets/Tomato.png"
import KetchUp from "../assets/ketchup.png"
import Mayonnaise from "../assets/mayonnaise.png"
import Mustard from "../assets/mustard.png"
import Onion from "../assets/onions.png"
import AmericanCheese from "../assets/american_cheese_180x180.png"
import Pickles from "../assets/pickles.png"
import FriesImage from "../assets/fries.jpg"
import StrawberrySlushieImage from "../assets/slushie-strawberry-watermelon.jpg"
import AppleSlices from "../assets/AppleSlices.jpg"
import BigMacSauce from '../assets/big_mac_sauce.png'
import ShrededLettuce from '../assets/shredded_lettuce.png'

type IngredientsListType = { [key: string]: { price: number, image: StaticImageData } }

const otherIngredients: IngredientsListType = {
  Tomato: { price: 8, image: Tomato },
  KetchUp: { image: KetchUp, price: 12 },
  Pickles: { price: 5, image: Pickles },
  "American Cheese": { price: 40, image: AmericanCheese },
  Onion: { image: Onion, price: 17 },
  Mustard: { image: Mustard, price: 20 },
  Mayonnaise: { image: Mayonnaise, price: 40 },
  "Apple Slices": { image: AppleSlices, price: 20 },
  "Strawberry Slushie": { image: StrawberrySlushieImage, price: 25 },
  Fries: { image: FriesImage, price: 15 },
  "Big Mac Sauce": { image: BigMacSauce, price: 10 },
  "Shreded Lettuce": { image: ShrededLettuce, price: 5 }
}

export type OtherIngredientsType = keyof typeof otherIngredients

const pattys: IngredientsListType = {
  "Meat Patty": { price: 60, image: MeatPatty },
}
export type PattyType = keyof typeof pattys

const buns: IngredientsListType = {
  "Sessame Bun": { image: SessameBun, price: 15 },
  "Regular Bun": { image: RegularBun, price: 10 },
}
export type BunType = keyof typeof buns

export type IngredientType = {
  name: OtherIngredientsType | PattyType | BunType
  image: StaticImageData
  getPrice: () => number
}

export type Burger = {
  otherIngredients: IngredientType[]
  mainIngredients: IngredientType[]
  optionalIngredients: IngredientType[]
  name: string
  image: StaticImageData | null
  price: number
}

export type FoodCardProps = {
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


export class BurgerBuilder {
  burger: Burger = {
    name: "",
    image: null,
    mainIngredients: [],
    otherIngredients: [],
    optionalIngredients: [],
    price: 0
  } as Burger

  constructor(
    name: string,
    patty: PattyType,
    bun: BunType,
    image: StaticImageData,
    otherIngredients: OtherIngredientsType[],
    optionalIngredients: OtherIngredientsType[],
    public description: string,
    public calories: number
    
  ) {
    this.burger.name = name
    this.burger.image = image
    this.addBun(bun)
    this.addPatty(patty)
    otherIngredients.forEach((ing) => {
      this.addOtherIngredient(ing)
    })
    optionalIngredients.forEach((ing) => {
      this.addOptionalIngredient(ing)
    })

  }

  addPatty(patty: PattyType) {
    return this.addIngredient({
      name: patty,
      image: pattys[patty].image,
      getPrice: () => pattys[patty].price
    })
  }

  addBun(bun: BunType) {
    console.log(bun);
    return this.addIngredient({
      name: bun,
      image: buns[bun].image,
      getPrice: () => buns[bun].price

    })
  }

  addOtherIngredient(ing: OtherIngredientsType) {
    this.burger.otherIngredients.push({
      name: ing,
      image: otherIngredients[ing].image,
      getPrice: () => otherIngredients[ing].price
    })
    return this
  }

  addOptionalIngredient(ing: OtherIngredientsType) {
    this.burger.optionalIngredients.push({
      name: ing,
      image: otherIngredients[ing].image,
      getPrice: () => otherIngredients[ing].price
    })
    return this
  }

  private addIngredient(ing: IngredientType) {
    this.burger.mainIngredients.push(ing)
    return this
  }

  removeIngredient(ingName: OtherIngredientsType) {
    this.burger.otherIngredients = this.burger.otherIngredients.filter(
      ingredient => ingredient.name !== ingName
    )
    return this
  }

  build() {
    this.burger.price = this.getPrice()
    return this.burger
  }

  getPrice() {
    return this.burger.mainIngredients.reduce((acc, red) => acc + red.getPrice(), 0) +
      this.burger.otherIngredients.reduce((acc, red) => acc + red.getPrice(), 0)
  }
}
