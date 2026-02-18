import { projects } from "../../../constants/constants"

const ProjectCards = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {projects.map((p, idx) => {
          return (
            <div className="col-lg-6" key={idx}>
              <div className="p-3 pointer projectCardContainer">
                <div className="overflow-hidden rounded-3">
                  <img className="img-fluid rounded-3 projects-img" src={p.img} alt="" />
                </div>
                <h3 className="mt-4 fs-4 fw-semibold">{p.title}</h3>
                <span className="border-custom-gray px-2 py-1 rounded-4">{p.tag}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCards