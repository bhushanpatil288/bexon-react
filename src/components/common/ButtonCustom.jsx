import { RiArrowRightLine } from "@remixicon/react"
import "./css/ButtonCustom.css"

const ButtonCustom = ({text, isNoBg = false, onClick, type = "button"}) => {
  return (
     <button type={type} onClick={onClick} className={`overflow-hidden btn-custom ${isNoBg ? "btn-custom-2" : ""} d-flex gap-2 align-items-center justify-content-end`}>
      <div className="btn-text-wrapper position-relative ms-3">
        <p className="text-1 fw-bold spacing-wide">{text}</p>
        <p className="text-2 fw-bold spacing-wide">{text}</p>
      </div>
      <div className="bg-dark p-2 rounded-circle arrow">
        <RiArrowRightLine size={20} />
      </div>
    </button>
  )
}

export default ButtonCustom