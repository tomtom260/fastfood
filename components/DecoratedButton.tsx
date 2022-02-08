import React from "react"
import ButtonBase, { ButtonProps } from "./CommandButton"

function DecoratedCommandButton({
  children,
  onClick,
  containerStyle,
}: ButtonProps) {
  return (
    <ButtonBase
      onClick={onClick}
      containerStyle={`flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 ${containerStyle}`}
    >
      {children}
    </ButtonBase>
  )
}

export default DecoratedCommandButton
