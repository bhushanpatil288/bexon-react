import { RiMenuFill } from "@remixicon/react"

const MenuBtn = ({isOpen, setIsOpen}) => {
  return (
    <button onClick={()=>{setIsOpen(!isOpen)}} className="menuBtn bg-custom-gray border border-black text-white pointer px-2 py-2 border-0 rounded-2 d-xl-none">
      <RiMenuFill />
    </button>
  )
}

export default MenuBtn