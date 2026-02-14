import "./section-hero.css"
import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"

const Hero = () => {
  return (
    <div className="container mt-5 pt-4">
      <div className="row hero-wrapper">
        <HeroLeft />
        <HeroRight />
      </div>
    </div>
  )
}

export default Hero