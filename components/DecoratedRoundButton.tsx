type RoundButtonProps = {
  children: string
  active: boolean
  onClick: () => void
}

const RoundButton = ({ children, active, onClick }: RoundButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        active && "border-yellow-500"
      } cursor-pointer mx-2 flex items-center justify-center shadow-lg border-2 w-12 h-12 rounded-full`}
    >
      <span className={`${active ? "font-bold text-yellow-500" : ""}`}>
        {children}
      </span>
    </div>
  )
}

export default RoundButton
