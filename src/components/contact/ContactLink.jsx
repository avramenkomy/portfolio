export default function ContactLink(props) {
  const { label, href, value } = props;

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="rounded-2xl border border-(--border) bg-(--card) p-5 text-(--foreground) transition hover:-translate-y-1 hover:border-(--accent) hover:bg-(--card-hover)"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--muted-foreground)">
        {label}
      </p>

      <p className="mt-3 wrap-break-word text-lg font-semibold text-(--accent)">
        {value}
      </p>
    </a>
  );
}