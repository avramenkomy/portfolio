import { cn } from "@/lib/utils";

export default function Card(props) {
  const { as: Component = 'div', children, className='', hover=true } = props;

  return (
    <Component
      className={cn(
        'rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm',
        'transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--card-hover)]',
        className
      )}
    >
      {children}
    </Component>
  )
}