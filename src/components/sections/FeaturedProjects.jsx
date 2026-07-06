import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/projects/ProjectCard';
import Button from '@/components/ui/Button';

import projects from '@/data/projects';


export default function FeaturedProjects() {
  const featuredProjects = projects.items.filter(project => project.featured);

  return (
    <Section id="projects">
      <SectionTitle
        title={projects.title}
        description={projects.description}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map(project => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>

      <div className="mt-10">
        <Button
          href="/projects"
          variant="secondary"
        >
          View all projects
        </Button>
      </div>
    </Section>
  )
}
