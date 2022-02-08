import { Burger } from "../components/burgerBuilder"
import { AddToCartDto } from "../store/cart"
import { Food } from "../store/food"

export class FoodCartAdapter {
  static addItem(item: Burger): AddToCartDto {
    return {
      name: item.name,
      ingredients: [...item.mainIngredients, ...item.otherIngredients],
      quantity: 1,
      image: item.image!,
      getPrice: () => item.price
    }
  }
}
