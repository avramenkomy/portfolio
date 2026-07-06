import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/projects/ProjectCard';

import projects from '@/data/projects';


export default function FeaturedProjects() {
  return (
    <Section id="projects">
      <SectionTitle
        title={projects.title}
        description={projects.description}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.items.map(prj => (
          <ProjectCard
            key={prj.title}
            project={prj}
          />
        ))}
      </div>
    </Section>
  )
}