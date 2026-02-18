import { RiBarChartFill, RiUserCommunityFill, RiVerifiedBadgeFill, RiStackedChartLine, RiGlobalLine, RiCheckboxCircleLine } from "@remixicon/react"
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
import processGlow from "/images/h7testi-shape.png"
import project1 from "/images/projects/h6-project-1.webp"
import project2 from "/images/projects/h6-project-2.webp"
import project3 from "/images/projects/h6-project-3.webp"
import project4 from "/images/projects/h6-project-4.webp"

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

const processCards = [
  {
    title: "Discoverty & Planning",
    icon: RiStackedChartLine,
    des: "he first step in our process is understanding your unique business needs, objectives, and our cutomes challenges. he first step in our process is understanding your unique business needs, objectives, and our cutomes challenges. he first step in our process is understanding ."
  },
  {
    title: "Execution & Delivery",
    icon: RiGlobalLine,
    des: "he first step in our process is understanding your unique business needs, objectives, and our cutomes challenges. he first step in our process is understanding your unique business needs, objectives, and our cutomes challenges. he first step in our process is understanding ."
  },
  {
    title: "Review & Support",
    icon: RiCheckboxCircleLine,
    des: "he first step in our process is understanding your unique business needs, objectives, and our cutomes challenges. he first step in our process is understanding your unique business needs, objectives, and our cutomes challenges. he first step in our process is understanding ."
  }
]

const projectsCategories = ["All", "Branding", "Business", "Designing", "Empower", "Excellence", "Growth"]

const projects = [
  {
    title: "Environmental Impact Dashboard",
    tag: "Business",
    img: project1
  },{
    title: "Rebranding Strategy for a Growing",
    tag: "Growth",
    img: project2
  },{
    title: "Event Management Platform",
    tag: "Excellence",
    img: project3
  },{
    title: "Digital Marketing Campaign",
    tag: "Empower",
    img: project4
  },
]

const clients = [ c1, c2, c3]


export { logoDark, logoLight, awardRoundedText, aboutBanner, processGlow, HeroVid, navItems, ourSolutions, marquee, clients, processCards, projectsCategories, projects }