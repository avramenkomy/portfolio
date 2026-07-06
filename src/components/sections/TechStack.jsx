import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

import techStack from '@/data/techStack';


export default function TechStack() {
  return (
    <Section>
      <SectionTitle
        title={techStack.title}
        description={techStack.description}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.items.map(tech => (
          <Card key={tech}>
            <p className="text-lg font-medium text-zinc-100">
              {tech}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}