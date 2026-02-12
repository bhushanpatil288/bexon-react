import { RiSearchLine } from "@remixicon/react"
import ButtonCustom from "../common/ButtonCustom"

const NavRight = () => {
  return (
     <div className="d-flex gap-3">
        <div className="bg-custom-main px-3 d-flex justify-content-center align-items-center py-1 rounded-circle pointer">
          <RiSearchLine />
        </div>

        <ButtonCustom text="Let's Talk" />
      </div>
  )
}

export default NavRight