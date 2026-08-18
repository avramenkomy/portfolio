import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

import contact from '@/data/contact';

export default function ContactCTA() {
  return (
    <Section id="contact">
      <Card
        hover={false}
        className="relative overflow-hidden p-8 text-center sm:p-12"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--accent)]/20 blur-3xl" />

        <div className="relative z-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {contact.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--muted-foreground)]">
            {contact.description}
          </p>

          <div className="mt-8">
            <Button
              href={contact.href}
            >
              {contact.buttonText}
            </Button>
          </div>
        </div>
      </Card>
    </Section>
  )
}
