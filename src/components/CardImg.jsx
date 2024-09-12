
export default function CardImg({source,className,...rest}) {
  return (
    <img src={source} alt="img" {...rest} className={`${className}`}/>
  )
}
