import heroTechStack from '@/data/heroTechStack';

export default function HeroTechStack() {
  return (
    <ul className="mt-8 flex flex-wrap gap-3">
      {heroTechStack.map(tech => (
        <li
          key={tech}
          className="border border-zinc-800 rounded-full bg-zinc-900/70 px-4 text-sm text-zinc-300"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}