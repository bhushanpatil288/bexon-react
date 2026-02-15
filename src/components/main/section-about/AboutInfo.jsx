import Clients from "./AboutInfoComponents/Clients"
import SectionSubHeading from "../../common/SectionSubHeading"


const AboutInfo = () => {
  return (
      <div>

        <SectionSubHeading text="ABOUT OUR COMPANY" />

        <h2 className="display-5 fw-normal mt-4">Powering Innovation Through Partnerships with our Brands and Many Companies</h2>

        <div className="mt-4">
          <Clients />
        </div>

        <p className="fs-5 w-75 pe-5 text-body-secondary">Recognized by industryaward leaders, award winning team has been a proven record</p>

        <div className="w-75 border-top-gray mt-5 about-border-deco">
          <div className="d-flex gap-3 pt-3">
            <div>
              <p className="m-0 fw-normal display-1">20M</p>
              <p className="m-0 text-secondary">Reach Worldwide empower dreams everywhere</p>
            </div>
            <div>
              <p className="m-0 fw-normal display-1">8.5X</p>
              <p className="m-0 text-secondary">Faster Growth starts smart solutions today</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutInfo