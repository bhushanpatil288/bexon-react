import SectionSubHeading from "../../common/SectionSubHeading"
import { projectsCategories } from "../../../constants/constants"
import "./projects.css"
import { useState } from "react"

const Projects = () => {
  const[category, setCategory] = useState("All");
  return (
    <section>
      <div className="d-flex gap-3 justify-content-center flex-column align-items-center">
        <SectionSubHeading text={"Latest Projects"} />
        <h2 className="display-5 fw-normal text-center">Breaking Boudaries, <br /> Building Dreams.</h2>
        <ul className="list-unstyled categories d-flex gap-3">
          {projectsCategories.map((cat, idx)=>{
            return (
              <li 
                key={idx} className={` category text-center px-4 py-2 rounded-2 pointer ${cat} ${cat === category ? "active": ""}`}
                onClick={()=>{setCategory(cat)}}
              >
                {cat}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects