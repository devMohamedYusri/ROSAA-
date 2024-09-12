export default function CardImg({source,className,...rest}) {
  return (
    <img src={source} alt="img" {...rest} className={`w-full h-auto object-cover ${className}`}/>
  )
}
