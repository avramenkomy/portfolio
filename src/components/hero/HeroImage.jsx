import Image from 'next/image';

export default function HeroImage() {
  return (
    <>
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute -inset-4 -z-10 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <Image
            src="/images/avatar.png"
            alt="There will be a photo here soon"
            fill
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </>
  )
}
