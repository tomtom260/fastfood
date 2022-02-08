import React from "react"

export type ButtonProps = {
  children: string
  onClick: () => void
  containerStyle?: string
}

function ButtonBase({ children, onClick, containerStyle }: ButtonProps) {
  return (
    <div className={` ${containerStyle}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default ButtonBase
