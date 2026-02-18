import ProjectCards from "./ProjectCards";
import ProjectsHeading from "./ProjectsHeading"
import "./projects.css"
import { useState } from "react"


const Projects = () => {
  const[category, setCategory] = useState("All");
  return (
    <section className="mt-10">
     <ProjectsHeading category={category} setCategory={setCategory} />

      <ProjectCards />
    </section>
  )
}

export default Projects