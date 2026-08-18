import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

import techStack from '@/data/techStack';

export default function TechStack() {
  return (
    <Section id="tech-stack">
      <SectionTitle
        title={techStack.title}
        description={techStack.description}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.items.map((technology) => (
          <Card key={technology} className="group p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-lg font-medium text-[var(--foreground)]">
                {technology}
              </p>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted-surface)] text-[var(--accent)] transition group-hover:border-[var(--accent)]">
                {technology[0]}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}