import { RiBarChartFill } from "@remixicon/react"
// images
import logoDark from "/images/primary-logo.webp"
import logoLight from "/images/secondary-logo.webp"
import awardRoundedText from "/images/award-rounded-text.svg"

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
  }
]

export { logoDark, logoLight, awardRoundedText, HeroVid, navItems, ourSolutions }