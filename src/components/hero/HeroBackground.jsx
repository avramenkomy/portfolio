export default function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="pointer-events-none absolute left-1/2 top-12 z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-(--accent-glow) blur-3xl" />
    </>
  );
}
