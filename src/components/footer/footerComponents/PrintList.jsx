const PrintList = ({data}) => {
  console.log(data)
  return (
    <ul className="list-unstyled d-flex flex-column gap-2 text-gray">
      {data.map((item, i)=>{
        return (
          <li key={i}>
            <a href={item.url} className={`text-gray text-decoration-none ${item?.badge ? "footer-badge":""}`}>{item.title}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default PrintList