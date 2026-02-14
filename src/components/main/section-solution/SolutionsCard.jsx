import ButtonCustomSecondary from "../../common/ButtonCustomSecondary"

const SolutionsCard = ({index, title, icon:Icon, des}) => {
  return (
    <div className="col-lg-6 col-xl-4">
        <div className=" p-4 rounded-3 solutions-card pointer position-relative">
          <h6 className="bg-custom-main service-serial">
            0{index}.
          </h6>

          <div className="overflow-hidden">
            <div className="service-icon-wrapper d-flex justify-content-center align-items-center rounded-circle">
              <Icon size={45} color="#288A89" />
            </div>
            <h3 className="fw-semibold mt-5">
              {title}
            </h3>
            <p className="mt-3">
              {des}
            </p>
            <div className="mt-4">
              <ButtonCustomSecondary text="Learn more" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default SolutionsCard