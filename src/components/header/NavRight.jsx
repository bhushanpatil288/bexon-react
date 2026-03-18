import { useState } from "react";
import { RiSearchLine } from "@remixicon/react"
import ButtonCustom from "../common/ButtonCustom"
import ContactModal from "../common/ContactModal"

const NavRight = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="d-flex gap-3 d-none d-xl-flex">
        <div className="bg-custom-main px-3 d-flex justify-content-center align-items-center py-1 rounded-circle pointer">
          <RiSearchLine />
        </div>

        <ButtonCustom text="Let's Talk" onClick={handleShow} />
      </div>

      <ContactModal show={showModal} handleClose={handleClose} />
    </>
  )
}

export default NavRight