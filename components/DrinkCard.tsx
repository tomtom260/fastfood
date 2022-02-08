import Image from "next/image"
import { useAppDispatch } from "../store"
import { addSelectedDrink } from "../store/drink"
import { useRouter } from "next/router"

type DrinkCardProps = {
  itemName: string
  image: StaticImageData
  imageBig: StaticImageData
  description: string
}

const DrinkCard = (props: DrinkCardProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
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

export default DrinkCard
