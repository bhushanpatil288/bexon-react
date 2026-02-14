import Navbar from "./Navbar"
import NavRight from "./NavRight"
import Logo from "./Logo"
import HamMenu from "./HamMenu"
import "./header.css"
import { useState } from "react"
import MenuBtn from "./MenuBtn"

const Header = () => {
  const [isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <div className="px-2 py-2 d-flex justify-content-between align-items-center">
        <Logo variant="dark" />
        <Navbar />
        <NavRight />

        {/* ham menu and overlay */}
        <MenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        { isOpen ? <div className="overlay" onClick={()=>{setIsOpen(!isOpen)}}></div> : ''}
        
        
        <HamMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      </div>
    </>
  )
}

export default Header