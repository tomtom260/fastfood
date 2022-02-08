import { Component } from "react"
import CloseIcon from "./CloseIcon"
import PlusIcon from "./PlusIcon"
import Image from "next/image"

type IngredientsProps = {
  name: string
  image: StaticImageData
  optional?: boolean
  selected?: boolean
  onClick?: () => void
}

class Ingredient extends Component<IngredientsProps> {
  render(): React.ReactNode {
    return (
      <div className="flex flex-col items-center flex-shrink-0 mr-14 border p-10 pb-5 shadow-xl relative">
        {this.props.optional && (
          <div
            onClick={this.props.onClick}
            className=" cursor-pointer absolute right-2 top-2"
          >
            {this.props.selected ? <CloseIcon /> : <PlusIcon />}
          </div>
        )}
        <Image src={this.props.image} alt="burger" width={111} height={111} />
        <p className=" capitalize mt-10 text-xl font-semibold ">
          {this.props.name}
        </p>
      </div>
    )
  }
}

export default Ingredient
