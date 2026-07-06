import Image from 'next/image';

export default function HeroImage() {
  return (
    <>
    <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800">
      <Image
        src="/images/avatar.png"
        alt="There will be a photo here soon"
        fill
        className="object-cover"
        priority
      />
    </div>
    <div className="absolute -inset-4 -z-10 rounded-full bg-yellow-500/20 blur-3xl" />
    </>
  )
}