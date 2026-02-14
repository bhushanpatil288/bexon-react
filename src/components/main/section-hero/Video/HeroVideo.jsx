import { useEffect } from "react"
import { HeroVid } from "../../../../constants/constants"

const HeroVideo = () => {
  
  useEffect(()=>{
    const minScale = 0.74;
    const maxScale = 1.04;
    const scrollDistance  = 600;

    const handleScroll = () =>{
      const video = document.querySelector(".hero-video-wrapper");
      
      const scrollY = (window.scrollY+1);

      const progress = Math.min(scrollY / scrollDistance, 1);

      const scale = minScale + progress * (maxScale - minScale);

      video.style.transform = `scale(${scale})`;
    }

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  })

  return (
    <div className="hero-video-wrapper overflow-hidden rounded-3 mt-5 m-xl-0">
      <video src={HeroVid} autoPlay muted loop></video>
    </div>
  )
}

export default HeroVideo