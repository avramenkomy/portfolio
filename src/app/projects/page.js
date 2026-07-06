import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/projects/ProjectCard';
import Container from '@/components/ui/Container';

import projects from '@/data/projects';

export const metadata = {
  title: 'Projects',
  description:
    'A collection of frontend projects built with JavaScript, React and Next.js.',
}



export default function ProjectsPage() {
  return (
    <main className="py-24">
      <Container>
        <SectionTitle
          title="Projects"
          description="A full collection of projects, experiments and frontend applications."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.items.map(project => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
