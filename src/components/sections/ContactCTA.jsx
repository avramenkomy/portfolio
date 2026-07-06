import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

import contact from '@/data/contact';

export default function ContactCTA() {
  return (
    <Section id="contact">
      <div
        className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 text-center sm:p-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {contact.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
          {contact.description}
        </p>

        <div className="mt-8">
          <Button href={contact.href}>
            {contact.buttonText}
          </Button>
        </div>
      </div>
    </Section>
  )
}
