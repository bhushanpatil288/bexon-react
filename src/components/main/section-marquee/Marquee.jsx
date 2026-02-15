import "swiper/css"
import "./marquee.css"
import { marquee } from "../../../constants/constants"

const Marquee = () => {
  return (
    <section className="marquee-section border overflow-hidden rounded-4 mt-10">
      <div className="marquee">
        <div className="marquee-content">
          {marquee.map((item, i) => (
            <div className="marquee-item" key={i}>
              <h4>{item.text}</h4>
              <img src={item.img} alt="marquee" />
            </div>
          ))}
        </div>

        {/* duplicate for seamless infinite scroll */}
        <div className="marquee-content">
          {marquee.map((item, i) => (
            <div className="marquee-item" key={`dup-${i}`}>
              <h4>{item.text}</h4>
              <img src={item.img} alt="marquee" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marquee
