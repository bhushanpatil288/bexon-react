import { RiArrowRightUpLine } from "@remixicon/react"
import ButtonCustom from "../../common/ButtonCustom.jsx"
import "./section-hero.css"

const Hero = () => {
  return (
    <div className="container mt-5 pt-4">
      <div className="row">
          <div className="col-4">
            <div className="pe-5">
              <p className="pe-5 mt-5 heroPara position-relative">Recognized by industry leaders, of our award-winning team has a proven record of delivering excellence across projects</p>
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex flex-column gap-4">
              <h1 className="display-1 fw-bolder">Driving Innovation to Transform Business Futures <RiArrowRightUpLine size={68} /></h1>
              <div className="row justify-content-center align-items-center">
                <div className="col-3">
                  <ButtonCustom text="Get Started" />
                </div>
                <div className="col-6">
                  <p className="fs-5 m-0">Recognized by industryaward leaders, award winning team has be a proven record.</p>
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero