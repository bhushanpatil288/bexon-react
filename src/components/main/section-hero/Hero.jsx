import "./section-hero.css"
import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"
import HeroVideo from "./Video/HeroVideo"

const Hero = () => {
  return (
    <section className="container-fluid  bg-custom-hero p-3 rounded-3 overflow-hidden">
      <div className="container mt-5 pt-4 overflow-hidden">
        <div className="row hero-wrapper">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
      <div className="container-fluid">
          <HeroVideo />
      </div>
    </section>
  )
}

export default Hero