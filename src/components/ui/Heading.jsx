export default function Heading({ children }) {
  return (
    <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
      {children}
    </h1>
  )
}