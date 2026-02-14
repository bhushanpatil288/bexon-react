import ButtonCustomSecondary from "../../common/ButtonCustomSecondary"

const SolutionsCard = ({title, icon:Icon, des}) => {
  return (
    <div className="col-lg-6 col-xl-4 p-4 rounded-3 solutions-card pointer">
        <div className="overflow-hidden">
          <div className="service-icon-wrapper d-flex justify-content-center align-items-center rounded-circle">
            <Icon size={45} color="#288A89" />
          </div>
          <h4 className="fw-semibold mt-5">
            {title}
          </h4>
          <p className="mt-3">
            {des}
          </p>
          <div className="mt-4">
            <ButtonCustomSecondary text="Learn more" />
          </div>
        </div>
    </div>
  )
}

export default SolutionsCard