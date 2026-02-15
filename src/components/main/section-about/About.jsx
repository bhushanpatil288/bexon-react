import { aboutBanner } from "../../../constants/constants"
import AboutInfo from "./AboutInfo"
import "./about.css"

const About = () => {
  return (
    <section className="mt-10">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row gy-5 gy-lg-0">

          <div className="col-lg-6">
            <div className="about-banner-container d-flex justify-content-center">
              <img className="rounded-3 img-fluid" src={aboutBanner} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <AboutInfo />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About