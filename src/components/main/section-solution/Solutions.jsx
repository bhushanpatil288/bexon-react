import SectionHeading from "../../common/SectionHeading"
import SolutionsCard from "./SolutionsCard"
import { ourSolutions } from "../../../constants/constants"
import "./solutions.css"

const Solutions = () => {
  return (
    <section>
      <div className="container mt-5 pt-4">
        <SectionHeading 
          subHeading="OUR SOLUTIONS" 
          heading="Tailor Business Solutions for Corporates."  
          btnText="Explore More"
        />

        <div className="row mt-5 gx-4 gy-4 gy-xl-0">
          {ourSolutions.map((card, idx)=>{
            return (
              <SolutionsCard key={idx} index={idx+1} title={card.title} icon={card.icon} des={card.des} />
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Solutions