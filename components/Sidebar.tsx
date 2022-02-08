import React, { Component } from "react"
import Image from "next/image"
import BeverageImage from "../assets/beverages.jpg"
import BurgerImage from "../assets/burgers.jpg"
import { useAppDispatch, useAppSelector } from "../store"
import { SectionCategories, setSelectedSection } from "../store/homeSlice"

type SidebarItemsType = {
  itemName: SectionCategories
  image: StaticImageData
}[]

const sidebarItems: SidebarItemsType = [
  { itemName: "burgers", image: BurgerImage },
  { itemName: "beverages", image: BeverageImage },
]

export const Sidebar = () => {
  const items = sidebarItems
  const selectedSection = useAppSelector(state => state.home.selectedSection)


  return (
    <div
      className=" shadow-lg rounded-lg  flex w-max  self-center justify-self-center overflow-hidden bg-white p-2 border-gray-400"
    >
      {items.map(item => (
        <SidebarItem
          active={selectedSection === item.itemName}
          key={item.itemName}
          image={item.image}
          itemName={item.itemName}
        />
      ))}
    </div>
  )
}

type SidebarItemProps = {
  image: StaticImageData
  active: boolean
  itemName: SectionCategories
}

const SidebarItem = (props: SidebarItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <div
      onClick={() => dispatch(setSelectedSection({ selectedSection: props.itemName }))}
      className={`flex flex-grow-0 items-center ${props.active ? " border-red-700" : ""
        } overflow-hidden border-b-[6px] border-white bg-white cursor-pointer mr-8`}
    >
      <Image
        src={props.image}
        width={80}
        height={80}
        alt="category Image"
      />
      <span
        className={`ml-5  capitalize text-lg ${props.active ? "font-bold text-indigo-600" : ""
          }`}
      >
        {props.itemName}
      </span>
    </div>
  )
}

export default Sidebar
