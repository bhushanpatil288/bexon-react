import { clients } from "../../../../constants/constants"

const Clients = () => {
  return (
    <ul className="list-unstyled d-flex flex-wrap">
      {clients.map((img, i) => {
        return (
          <li key={i} className={`client-img client-img-${i + 1}`}>
            <img src={img} alt={`client-${i + 1}`} className="border border-3 border-white rounded-circle w-75 bg-white" />
          </li>
        )
      })}
      <li>
        <div className="border border-3 border-white rounded-circle more-clients">
          <span>+</span>
        </div>
      </li>
    </ul>
  )
}

export default Clients