import HeroCircle from "./HeroCircle"

const HeroLeft = () => {
  return (
    <div className="col-lg-4 d-flex d-xl-block flex-column justify-content-center align-items-center">
      <div className="pe-xl-5">
        <p className="pe-5 mt-5 heroPara position-relative">Recognized by industry leaders, of our award-winning team has a proven record of delivering excellence across projects</p>
      </div>
      <HeroCircle />
    </div>
  )
}

export default HeroLeft