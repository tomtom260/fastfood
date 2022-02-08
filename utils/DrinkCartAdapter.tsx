import { AddToCartDto } from "../store/cart"
import { Drink } from "../pages/drinks/[slug]"

export class DrinkCartAdapter {
    static addItem(item: Drink): AddToCartDto {
        return {
            name: item.name,
            size: item.size,
            quantity: 1,
            image: item.image!,
            getPrice: () => item.getPrice()
        }
    }
}
