import Navbar from "./Navbar"
import NavRight from "./NavRight"
import Logo from "./Logo"
import HamMenu from "./HamMenu"
import "./header.css"
import { useState } from "react"
import MenuBtn from "./MenuBtn"

const Header = () => {
  const [isOpen, setIsOpen ] = useState(true);

  return (
    <header className='container-fluid bg-custom-main p-3'>
      <div className="bg-custom-hero container-fluid rounded-3 d-flex justify-content-between py-3 align-items-center">
        <Logo variant="dark" />
        <Navbar />
        <NavRight />

        {/* ham menu and overlay */}
        <MenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        { isOpen ? <div className="overlay" onClick={()=>{setIsOpen(!isOpen)}}></div> : ''}
        
        
        <HamMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      </div>
    </header>
  )
}

export default Header