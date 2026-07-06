import SectionTitle from '@/components/ui/SectionTitle';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

import aboutPage from '@/data/aboutPage';


export const metadata = {
  title: 'About',
  description: 'Learn more about my frontend development journey, skills and approach.'
}

export default function AboutPage() {
  return (
    <main className="py-24">
      <Container>
        <SectionTitle
          title={aboutPage.title}
          description={aboutPage.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <Card
            hover={false}
            className="p-6"
          >
            <p className="text-lg leading-8 text-zinc-300">
              {aboutPage.intro}
            </p>
          </Card>

          <div className="grid gap-6">
            {aboutPage.sections.map(section => (
              <Card key={section.title} className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
                  {section.title}
                </h2>
                <p className="mt-4 leading-8 text-zinc-400">
                  {section.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}
