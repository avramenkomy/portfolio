export default function ProjectCard({ project }) {
  return (
    <article
      className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-blue-500/40"
    >
      <div className="flex h-full flex-col">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
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
              className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
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
    </article>
  )
}