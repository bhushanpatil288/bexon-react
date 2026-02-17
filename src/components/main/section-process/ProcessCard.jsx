const ProcessCard = ({index, title, icon:Icon, des}) => {
  return (
    <div>
        <div className=" p-4 rounded-3 process-card position-relative">
          <h6 className="bg-custom-main process-serial">
            {index}
          </h6>

          <div className="overflow-hidden">
            <div className="process-icon-wrapper mt-5 d-flex justify-content-center align-items-center rounded-circle">
              <Icon size={45} color="#fff" />
            </div>
            <h3 className="fw-semibold mt-5">
              {title}
            </h3>
            <p className="mt-3">
              {des}
            </p>
          </div>
        </div>
    </div>
  )
}

export default ProcessCard