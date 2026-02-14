import { RiArrowRightUpLine } from "@remixicon/react"
import ButtonCustom from "../../common/ButtonCustom.jsx"

const HeroRight = () => {
  return (
    <div className="col-lg-8">
      <div className="d-flex flex-column gap-4">
        <h1 className="display-1 fw-bolder">Driving Innovation to Transform Business Futures <RiArrowRightUpLine size={68} /></h1>
        <div className="row justify-content-center align-items-center g-3 g-lg-0">
          <div className="col-lg-3">
            <ButtonCustom text="Get Started" />
          </div>
          <div className="col-lg-6">
            <p className="fs-5 m-0">Recognized by industryaward leaders, award winning team has be a proven record.</p>
          </div>
          <div className="col-0 col-lg-3"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroRight