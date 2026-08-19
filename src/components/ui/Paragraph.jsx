export default function Paragraph({ children }) {
  return (
    <p className="text-lg leading-8 text-(--muted-foreground)">
      {children}
    </p>
  )
}
