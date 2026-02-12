import { logo } from "../../constants/constants"

const Logo = () => {
  return (
    <div className="d-flex align-items-center border logo-container">
      <a href="#"><img src={logo} alt="bexon-logo" className="img-fluid" /></a>
    </div>
  )
}

export default Logo