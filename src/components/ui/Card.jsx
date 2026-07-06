import { cn } from "@/lib/utils";

export default function Card(props) {
  const { children, className='' } = props;

  return (
    <div className={cn(
      "border border-zinc-800 rounded-2xl bg-zinc-900/50 p-6",
      "transition-all duration-300 hover:border-blue-500/40",
      className
    )}>
      {children}
    </div>
  )
}