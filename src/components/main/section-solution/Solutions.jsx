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

        <div className="row">
          {ourSolutions.map((card, idx)=>{
            return (
              <SolutionsCard key={idx} title={card.title} icon={card.icon} des={card.des} />
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Solutions