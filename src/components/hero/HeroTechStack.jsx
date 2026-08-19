import heroTechStack from '@/data/heroTechStack';

export default function HeroTechStack() {
  return (
    <ul className="mt-8 flex flex-wrap gap-3">
      {heroTechStack.map(tech => (
        <li
          key={tech}
          className="rounded-full border border-(--border) bg-(--muted-surface) px-4 text-sm text-(--muted-foreground)"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}