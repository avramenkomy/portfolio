export default function Card(props) {
  const { children, className='' } = props;

  return (
    <div className={`
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-500/20
      p-6
      transition-all
      duration-300
      hover:border-blue-500/40
    `}>
      {children}
    </div>
  )
}