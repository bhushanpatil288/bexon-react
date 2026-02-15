import { RiBarChartFill, RiUserCommunityFill, RiVerifiedBadgeFill } from "@remixicon/react"
// images
import logoDark from "/images/primary-logo.webp"
import logoLight from "/images/secondary-logo.webp"
import awardRoundedText from "/images/award-rounded-text.svg"
import marquee1 from "/images/marquee/marquee-1.webp"
import marquee2 from "/images/marquee/marquee-2.webp"
import aboutBanner from "/images/about/h10-about-banner.webp"
import c1 from "/images/about/client-1.webp"
import c2 from "/images/about/client-2.webp"
import c3 from "/images/about/client-3.webp"

// videos
import HeroVid from "/videos/h10-banner-videio.mp4"

// others

const navItems = [
  {
    name: "Home",
    link: "#",
    dropdown: true
  },
  {
    name: "Pages",
    link: "#",
    dropdown: true
  },
  {
    name: "Services",
    link: "#",
    dropdown: true
  },
  {
    name: "Portfolios",
    link: "#",
    dropdown: true
  },
  {
    name: "Blog",
    link: "#",
    dropdown: true
  },
  {
    name: "Contact",
    link: "#",
    dropdown: false
  }
]

const ourSolutions = [
  {
    title: "Business Strategy Development",
    icon: RiBarChartFill,
    des: "Through a combination of data-driven insights and innovative approaches business."
  },
  {
    title: "Customer Experience Solutions",
    icon: RiUserCommunityFill,
    des: "Developing personalized customer journeys to increase satisfaction and loyalty."
  },
  {
    title: "Sustainability and ESG Consulting",
    icon: RiVerifiedBadgeFill,
    des: "Provide tailored strategies that not only drive long-term value but also build trust."
  }
]

const marquee = [
  {
    text: "Growth",
    img: marquee1
  },
  {
    text: "Leadership",
    img: marquee2
  },
  {
    text: "Enterprise",
    img: marquee1
  },{
    text: "Leadership",
    img: marquee2
  }
]

const clients = [ c1, c2, c3]

export { logoDark, logoLight, awardRoundedText, aboutBanner, HeroVid, navItems, ourSolutions, marquee, clients }