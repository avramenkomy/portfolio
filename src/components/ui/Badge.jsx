export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--muted-surface)] px-4 py-1 text-sm text-[var(--accent)]">
      {children}
    </span>
  )
}