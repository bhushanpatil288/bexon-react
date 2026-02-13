import { RiCloseLargeLine, RiArrowDownSLine,  RiFacebookFill, RiInstagramLine, RiTwitterXLine, RiLinkedinFill } from "@remixicon/react"
import Logo from "./Logo"

import { navItems } from "../../constants/constants"

const HamMenu = ({isOpen, setIsOpen}) => {
  return (
    <div className={`hamBurgerMenu ${isOpen ? "opened": "closed"} p-4 text-white overflow-y-auto`}>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <Logo variant="light" />
          <RiCloseLargeLine color="white" size={28}  onClick={()=>{setIsOpen(!isOpen)}} className="hamCloseBtn"  />
        </div>
      </div>

      <div>
        <ul className="list-unstyled mt-4">
          {navItems.map((item, idx)=>{
            return (
              <li key={idx} className="border-bottom-gray py-2">
                <a href={item.link} className="text-decoration-none text-custom-white d-flex justify-content-between">
                  {item.name}
                  {item.dropdown ? <RiArrowDownSLine />: ''}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mt-4 d-flex flex-column gap-3">
        <h3>Contact Info</h3>
        <div>
          <p className="m-0 text-gray">Phone</p>
          <p className="m-0">(+012) 3456 7890</p>
        </div>
        <div>
          <p className="m-0 text-gray">Email</p>
          <p className="m-0">Info@bexon.com</p>
        </div>
        <div>
          <p className="m-0 text-gray">Location</p>
          <p className="m-0">256, Ashirwad township 2, udhna, surat</p>
        </div>
      </div>

      <div className="mt-4">
        <h3>Follow Us</h3>
        <ul className="list-unstyled d-flex gap-3">
          <li className="bg-custom-gray rounded-circle p-1 social-link"><a href="#" className="text-black pointer"><RiFacebookFill/></a> </li>
          <li className="bg-custom-gray rounded-circle p-1 social-link"><a href="#" className="text-black pointer"><RiInstagramLine/></a> </li>
          <li className="bg-custom-gray rounded-circle p-1 social-link"><a href="#" className="text-black pointer"><RiTwitterXLine/></a> </li>
          <li className="bg-custom-gray rounded-circle p-1 social-link"><a href="#" className="text-black pointer"><RiLinkedinFill/></a> </li>
        </ul>
      </div>
    </div>
  )
}

export default HamMenu