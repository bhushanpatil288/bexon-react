import ButtonCustom from "./ButtonCustom"
import { RiBox3Fill } from "@remixicon/react"

const SectionHeading = ({subHeading, heading, btnText}) => {
  return (
    <div className="row align-items-center">
      <div className="col-6">
        <div className="d-flex align-items-center gap-2">
          <RiBox3Fill color="#288A89" />
          <p className="text-gray-dark fw-bold m-0">{subHeading}</p>
        </div>
        <h2 className="display-4 fw-medium mt-4">{heading}</h2>
      </div>
      <div className="col-6">
          <div className="d-flex justify-content-end">
            <ButtonCustom text={btnText} />
          </div>
      </div>

      <div></div>
    </div>
  )
}

export default SectionHeading