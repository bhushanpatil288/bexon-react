import { navItems } from "../../constants/constants"
import { RiArrowDownSLine } from "@remixicon/react"

const Navbar = () => {
  return (
    <nav>
      <ul className="list-unstyled d-flex gap-4 bg-white p-2 px-4 rounded-5 mb-0">
        {navItems.map((item, idx)=>{
          return (
          <li key={idx}>
            <a className="text-decoration-none text-custom d-flex justify-content-center align-items-center gap-1" href={item.link}>
              <p className="m-0">{item.name}</p>
              {item.dropdown ? <p className="m-0"><RiArrowDownSLine size={20} /></p>: ''}
            </a>
          </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar