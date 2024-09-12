export default function SmallP({text, className}) {
  return (
    <p className={`text-zinc-600 text-xs sm:text-sm md:text-base my-4 sm:my-6 md:my-8 lg:my-10 ${className}`}>{text}</p>
  )
}
