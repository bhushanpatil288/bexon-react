import { RiArrowRightLine } from "@remixicon/react"
import "./css/ButtonCustom.css"

const ButtonCustom = ({text}) => {
  return (
    <button className="overflow-hidden btn-custom d-flex gap-2 align-items-center justify-content-end position-relative">
      <div>
        <p className="m-1 ps-3 mt-2 text-1 fw-bold spacing-wide">{text}</p>
        <p className="m-1 ps-3 mt-2 text-2 fw-bold spacing-wide">{text}</p>
      </div>
      <div className="bg-dark p-2 rounded-circle arrow">
        <RiArrowRightLine size={20} />
      </div>
    </button>
  )
}

export default ButtonCustom