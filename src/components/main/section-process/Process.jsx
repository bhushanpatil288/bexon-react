import ButtonCustom from "../../common/ButtonCustom"
import SectionSubHeading from "../../common/SectionSubHeading"
import ProcessCard from "./ProcessCard"
import "./process.css"

import { RiStackedChartLine } from "@remixicon/react"

const Process = () => {
  return (
    <section className="rounded-3 px-10 process-section">
      <div className="container">
        <div className="row">

          <div className="col-5">
            <div>
              <SectionSubHeading text={"OUR PROCESS"} />
              <h2 className="text-white mt-4 display-5 fw-normal">Seamless Process and Great Results</h2>
              <div className="mt-4">
                <ButtonCustom text={"Explore More"} />
              </div>
            </div>
          </div>

          <div className="col-7 text-white">
            <div>
              <ProcessCard index = "Step 01" title = "Discoverty & Planning" icon = {RiStackedChartLine} des = "he first step in our process is understanding your unique business needs, objectives, and our cutomes challenges. he first step in our process is understanding your unique business needs, objectives, and our cutomes challenges. he first step in our process is understanding ." />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Process