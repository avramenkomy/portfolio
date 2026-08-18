import Image from 'next/image';

export default function HeroImage() {
  return (
    <>
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute -inset-4 -z-10 rounded-full bg-[var(--accent)]/20 blur-3xl" />

        <div className="relative h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
          <Image
            src="/images/avatar.png"
            alt="There will be a photo here soon"
            fill
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[var(--border)]" />
        </div>
      </div>
    </>
  )
}
