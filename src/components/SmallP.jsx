
export default function SmallP({text ,className}) {
  return (
    <p className={`text-zinc-600 text-sm my-10 ${className}`}>{text}</p>
  )
}
