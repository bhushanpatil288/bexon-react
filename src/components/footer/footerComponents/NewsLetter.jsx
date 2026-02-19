import ButtonCustom from "../../common/ButtonCustom"

const NewsLetter = () => {
  return (
    <div className="newsLetterBg rounded-3 d-flex flex-column gap-4 gap-sm-3">
      <h3>Subscribe to Our Newsletter</h3>
      <div className="input-wrapper d-sm-flex gap-3 rounded-5 overflow-hidden px-2 py-2 border">
        <input id="name" name="name" type="text" placeholder="Enter email" className="ps-3" />
        <div className="d-flex justify-content-center mt-4 mt-sm-0">
          <ButtonCustom text={"Subscribe"} />
        </div>
      </div>
      <div className="d-flex gap-3 mt-3">
        <div>
          <input type="checkbox" id="check" />  
        </div>
        <label htmlFor="check">Agree to our <span className="fw-bold">Terms & Condition?</span></label>
      </div>
    </div>
  )
}

export default NewsLetter