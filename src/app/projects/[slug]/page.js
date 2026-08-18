import { notFound } from 'next/navigation';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

import projects from '@/data/projects';


export function generateStaticParams() {
  return projects.items.map(project => ({
    slug: project.slug,
  }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.items.find(project => project.slug === slug);

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}


export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.items.find(project => project.slug === slug);

  if (!project) notFound();

  return (
    <main className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Project
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border)] bg-[var(--muted-surface)] px-3 py-1 text-sm text-[var(--muted-foreground)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.demo && <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={project.demo}>
              Live Demo
            </Button>
          </div>}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={project.github}>
              GitHub
            </Button>
          </div>

        </div>
      </Container>
    </main>
  )
}