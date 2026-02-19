import { award1, award2 } from "../../../constants/constants"

const FooterAward = () => {
  return (
      <div className="d-flex gap-3 position-relative z-5 h-100">
        <div className="mt-auto">
          <img src={award1} alt="" />
        </div>
        <div className="mt-auto">
          <img src={award2} alt="" />
        </div>
      </div>
  )
}

export default FooterAward