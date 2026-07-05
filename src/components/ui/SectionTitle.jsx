export default function SectionTitle(props) {
  const { title, description } = props;

  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  )
}