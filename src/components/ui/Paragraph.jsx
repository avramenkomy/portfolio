export default function Paragraph({ children }) {
  return (
    <p className="text-lg leading-8 text-[var(--muted-foreground)]">
      {children}
    </p>
  )
}
