export default function ContactLink(props) {
  const { label, href, value } = props;

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-[var(--foreground)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--card-hover)]"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
        {label}
      </p>

      <p className="mt-3 break-words text-lg font-semibold text-[var(--accent)]">
        {value}
      </p>
    </a>
  );
}