import Section from '../ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';


export default function InterviewCTA() {
  const techList = ['JavaScript', 'React', 'Redux', 'TypeScript',];

  return (
    <Section id="interview">
      <Card
        hover={false}
        className="relative overflow-hidden p-8 sm:p-12"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/20 blur-3xl"/>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.5fr_0.5fr] lg:items-center">
          <div>
            <p className="text-sm fornt-medium uppercase tracking-[0.3em] text-blue-400">
              Interview Notes
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
              Подготовка к frontend-собеседованиям
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
              Собираю структурированную базу вопросов и ответов по JavaScript,
              React, Redux, TypeScript и frontend-архитектуре. Каждый материал
              содержит краткий ответ, подробный разбор, пример кода и
              формулировку для собеседования.
            </p>

            <div className="mt-8">
              <Button href="/interview">Открыть раздел</Button>
            </div>
          </div>

          <div className="mt-8 grid gap-3">
            {techList.map(tech => (
              <div
                key={tech}
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm font-medium text-zinc-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  )
}
