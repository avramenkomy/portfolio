import ContactLink from '@/components/contact/ContactLink';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

import contactPage from '@/data/contactPage';
import profile from '@/data/profile';


export const metadata = {
  title: 'Contact',
  description: 'Contact Mikhail Avramenko for frontend development opportunities and collaboration.'
}

export default function ContactPage() {
  const contacts = [
    {
      label: 'Phone',
      value: profile.phone,
      href: profile.phoneHref,
    },
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`
    },
    {
      label: 'GitHub',
      value: profile.github,
      href: profile.github,
    },
    {
      label: 'Telegram',
      value: profile.telegram,
      href: profile.telegram,
    },
    {
      label: 'LinkedIn',
      value: profile.linkedin,
      href: profile.linkedin,
    },
  ]
  return (
    <main className="py-24">
      <Container>
        <SectionTitle
          title={contactPage.title}
          description={contactPage.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <Card hover={false} className="p-6">
            <p className="text-lg leading-8 text-zinc-300">
              {contactPage.intro}
            </p>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map(contact => (
              <ContactLink
                key={contact.label}
                label={contact.label}
                value={contact.value}
                href={contact.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
