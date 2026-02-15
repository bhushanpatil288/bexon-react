import { RiBox3Fill } from "@remixicon/react"

const SectionSubHeading = ({text}) => {
  return (
     <div className="d-flex align-items-center gap-2">
      <RiBox3Fill color="#288A89" />
      <p className="text-gray-dark fw-bold m-0">{text}</p>
    </div>
  )
}

export default SectionSubHeading