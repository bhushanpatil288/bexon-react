import ButtonCustom from "./ButtonCustom"
import SectionSubHeading from "./SectionSubHeading"

const SectionHeading = ({subHeading, heading, btnText}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <SectionSubHeading text={subHeading} />
        <h2 className="display-4 fw-medium mt-4">{heading}</h2>
      </div>
      <div className="col-md-6">
          <div className="d-flex justify-content-start justify-content-md-end align-items-end mt-lg-5 pt-4 pt-lg-5">
            <ButtonCustom text={btnText} />
          </div>
      </div>
    </div>
  )
}

export default SectionHeading