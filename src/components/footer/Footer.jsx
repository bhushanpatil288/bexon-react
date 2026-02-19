import "./footer.css";
import FooterHeading from "./footerComponents/FooterHeading";
import FooterAward from "./footerComponents/FooterAward";
import FooterNav from "./footerComponents/FooterNav";
import NewsLetter from "./footerComponents/NewsLetter";

const Footer = () => {
  return (
    <section className="mt-10 footer-section rounded-3 text-white py-5 overflow-hidden position-relative">
      <div className="container pt-5">
        <div className="row">

          <div className="col-5">
           <FooterHeading />
          </div>

          <div className="col-7">
            <FooterNav />
          </div>

          <div className="col-5">
            <FooterAward />
          </div>

          <div className="col-7">
            <NewsLetter />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer