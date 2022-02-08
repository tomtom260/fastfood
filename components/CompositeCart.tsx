import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XIcon,
} from "@heroicons/react/outline"
import { useAppDispatch, useAppSelector } from "../store"
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  resetCart,
} from "../store/cart"
import { CartItems } from "../models/CartItems"
import DecoratedCommandButton from "./DecoratedButton"

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    image:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    image:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    image:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
]

export default function Cart() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(state => state.cart.items)

  const cartItems = new CartItems(items)

  return (
    // <div className="absolute inset-0 overflow-hidden">
    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
      <div className="w-screen max-w-[350px]">
        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.items.map(item => (
                    <li key={item.id} className="py-3 flex relative">
                      <div className="flex-shrink-0 w-24 h-24 border-gray-200 rounded-md overflow-hidden">
                        <Image
                          width={95}
                          height={95}
                          // layout="fill"
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <div className="flex flex-col">
                              <p className="ml-4 text-gray-700 capitalize">
                                {item.size
                                  ? item.size
                                  : `${item.getPrice()} ETB`}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <p className="flex self-end font-bold">
                            {item.getPrice() * item.quantity} ETB
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex w-20 text-gray-500   justify-between items-center">
                            <p className="">Qty {item.quantity}</p>
                            <div className="flex">
                              <MinusCircleIcon
                                onClick={() => {
                                  dispatch(decreaseQuantity(item.id))
                                }}
                                width={20}
                                className="cursor-pointer"
                              />
                              <PlusCircleIcon
                                onClick={() => {
                                  dispatch(increaseQuantity(item.id))
                                }}
                                width={20}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                          <XIcon
                            className=" w-7 text-red-500 cursor-pointer"
                            onClick={() => {
                              dispatch(removeItem(item.id))
                            }}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>{cartItems.getPrice()} ETB</p>
            </div>
            <DecoratedCommandButton
              containerStyle="mt-6"
              onClick={() => {
                dispatch(resetCart())
                alert("Order Submitted")
              }}
            >
              Order
            </DecoratedCommandButton>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}
