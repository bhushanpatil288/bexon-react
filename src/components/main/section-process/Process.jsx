import ButtonCustom from "../../common/ButtonCustom"
import SectionSubHeading from "../../common/SectionSubHeading"
import ProcessCard from "./ProcessCard"
import { processCards, processGlow } from "../../../constants/constants"
import "./process.css"


const Process = () => {

  return (
    <section className="rounded-3 px-10 process-section mt-10">
      <div className="container">
        <div className="row gx-5 gy-5 gy-lg-0">

          <div className="col-lg-5">
            <div className="position-sticky top-5">
              <SectionSubHeading text={"OUR PROCESS"} />
              <h2 className="text-white mt-4 display-5 fw-normal">Seamless Process and Great Results</h2>
              <div className="mt-4">
                <ButtonCustom text={"Explore More"} />
              </div>
            </div>
          </div>

          <div className="col-lg-7 text-white">
            <ul className="list-unstyled d-flex flex-column gap-5">
              {processCards.map((card, idx)=>{
                return (
                  <li key={idx} className="mx-5 position-sticky top-5 sticky-card">
                    <ProcessCard index = {`Step 0${idx+1}`} title = {card.title} icon = {card.icon} des = {card.des} />
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="process-glow-bg position-absolute">
              <img src={processGlow} className="img-fluid" alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Process