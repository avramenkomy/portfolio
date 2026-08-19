import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Card
      as="article"
      className="h-full p-6"
    >
      <div className="flex h-full flex-col">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-(--foreground)">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-(--muted-foreground)">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-(--border) bg-(--muted-surface) px-3 py-1 text-sm text-(--muted-foreground)"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-(--accent) transition hover:text-(--accent-hover)"
          >
            Details
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-(--accent) transition hover:text-(--accent-hover)"
          >
            GitHub
          </a>

          {project.demo && <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-(--accent) transition hover:text-(--accent-hover)"
          >
            Demo
          </a>}
        </div>
      </div>
    </Card>
  )
}
