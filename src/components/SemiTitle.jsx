export default function SemiTitle({text,className}) {
  return (
    <h4 className={`text-slate-400 uppercase text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ${className}`}>{text}</h4>
  )
}
