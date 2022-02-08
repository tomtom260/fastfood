import BigMacLarge from "../assets/Big-Mac--large.jpg"
import BIgQuarterPounderImageLarge from "../assets/Quarter-Pounder-with-Cheese--large.png"
import HamburgerLarge from "../assets/Hamburger--large.png"
import BigChesseBurger from "../assets/Cheeseburger.png"
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
import BigMac from "../assets/Big-Mac.jpg"
import QuarterPounderWithCheese from "../assets/Quarter-Pounder-with-Cheese.jpg"
import CheeseBurger from "../assets/Cheeseburger--small.png"
import Hamburger from "../assets/Hamburger.png"

export const burgerItems = [
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
    bigImage: BIgQuarterPounderImageLarge,
    image: QuarterPounderWithCheese,
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
  {
    name: "Cheeseburger",
    image: CheeseBurger,
    bigImage: BigChesseBurger,
    majorIngredients: {
      patty: "Meat Patty",
      bun: "Regular Bun",
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
      Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The McDonald’s Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese
      `,
    calories: 300,
  },
  {
    name: "Hamburger",
    image: Hamburger,
    bigImage: HamburgerLarge,
    majorIngredients: {
      patty: "Meat Patty",
      bun: "Regular Bun",
    },
    otherIngredients: [
      "American Cheese",
      "KetchUp",
      "Pickles",
      "Onion",
      "Mustard",
    ],
    optionalIngredients: ["Fries", "Apple Slices", "Strawberry Slushie"],
    description: `
      The original burger starts with a 100% pure beef burger seasoned with just a pinch of salt and pepper. Then, the McDonald’s burger is topped with a tangy pickle, chopped onions, ketchup and mustard.
      `,
    calories: 250,
  },
]

export const drinkItems = [
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
      `,
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
