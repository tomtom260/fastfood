import { useRouter } from "next/router"
import { useAppDispatch } from "../store"
import { addSelectedFood } from "../store/food"
import { BurgerBuilder, FoodCardProps } from "../utils/burgerBuilder"
import Image from "next/image"

function FoodCard(props: FoodCardProps) {
  const router = useRouter()
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

export default FoodCard
