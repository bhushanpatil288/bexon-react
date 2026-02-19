import { footerShape, servicesFooter, resourcesFooter } from "../../../constants/constants"
import { RiTimeLine } from "@remixicon/react"

import PrintList from "./PrintList"
const FooterNav = () => {
  return (
    <div>
      <div>
        <img className="footer-img" src={footerShape} alt="" />
      </div>
      <div className="row gy-4 gy-md-0">

        <div className="col-md-4">
          <div className="d-flex flex-column gap-3">
            <h4>Services</h4>
            <PrintList data={servicesFooter} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="d-flex flex-column gap-3">
            <h4>Resources</h4>
            <PrintList data={resourcesFooter}/>
          </div>
        </div>

        <div className="col-md-4 z-5">
          <div>
            <h4>Our Offices</h4>
            <p className="text-gray">993 Renner Burg, West Rond, MT 94251-030, USA.</p>
            <p className="m-0 fw-bolder">P:+1(009)544-7818</p>
            <p className="m-0 fw-bolder">M:support@bexon.com</p>
            <p className="text-gray mt-3"><span><RiTimeLine /></span> Mon-Frid 10am-10pm</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FooterNav