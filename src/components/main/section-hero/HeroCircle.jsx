import { awardRoundedText } from "../../../constants/constants"

const HeroCircle = () => {
  return (
    <div className="circle-text-wrapper mt-5">
      <div className="circle-text">
        <img src={awardRoundedText} alt="" />
      </div>
      <div className="circle-icon">
        <p className="fs-1 fw-bold">W.</p>
      </div>
    </div>
  )
}

export default HeroCircle