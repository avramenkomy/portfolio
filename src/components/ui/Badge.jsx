export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-(--border) bg-(--muted-surface) px-4 py-1 text-sm text-(--accent)">
      {children}
    </span>
  )
}