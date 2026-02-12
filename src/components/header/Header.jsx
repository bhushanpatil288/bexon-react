import Navbar from "./Navbar"
import NavRight from "./NavRight"
import Logo from "./Logo"
import "./header.css"

const Header = () => {
  return (
    <header className='container-fluid bg-custom-main p-3'>
      <div className="bg-custom-hero container-fluid rounded-3 d-flex justify-content-between py-3 align-items-center">
        <Logo />
        <Navbar />
        <NavRight />
      </div>
    </header>
  )
}

export default Header