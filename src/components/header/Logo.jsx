import { logoDark,logoLight } from "../../constants/constants"

const Logo = ({variant}) => {
  return (
    <div className="d-flex align-items-center logo-container">
      <a href="#"><img src={variant === "light" ? logoLight : logoDark} alt="bexon-logo" className="img-fluid" /></a>
    </div>
  )
}

export default Logo