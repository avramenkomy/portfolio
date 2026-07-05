export default function Badge({ children }) {
  return (
    <span
      className={`{
        inline-flex
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-1
        text-sm
        text-blue-400
      }`}
    >
      {children}
    </span>
  )
}