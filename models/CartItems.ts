import { CartItemType } from "../store/cart"

export class CartItems {
    constructor(public items: CartItemType[]) {

    }

    getPrice() {
        return this.items.reduce((acc, red) => acc + red.getPrice() * red.quantity, 0)
    }
}