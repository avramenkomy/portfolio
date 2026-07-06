import Card from '@/components/ui/Card';

export default function ProjectCard({ project }) {
  return (
    <Card
      as="article"
      className="h-full p-6"
    >
      <div className="flex h-full flex-col">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-50">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            Demo
          </a>
        </div>
      </div>
    </Card>
  )
}
