export default function SectionTitle(props) {
  const { title, description } = props;

  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[var(--muted-foreground)]">
          {description}
        </p>
      )}
    </div>
  )
}