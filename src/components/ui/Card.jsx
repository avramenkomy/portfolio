import { cn } from "@/lib/utils";

export default function Card(props) {
  const { as: Component = 'div', children, className='', hover=true } = props;

  return (
    <Component
      className={cn(
        'rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-sm shadow-black/20',
        'transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:border-blue-500/40 hover:bg-zinc-900/80',
        className
      )}
    >
      {children}
    </Component>
  )
}