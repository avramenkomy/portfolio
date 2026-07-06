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
              <p className="text-lg font-medium text-zinc-100">
                {technology}
              </p>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-sm font-semibold text-blue-400 transition group-hover:border-blue-500/40">
                {technology[0]}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}