import Section from '../ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

import about from '@/data/about';


export default function About() {
  return (
    <Section id="about">
      <SectionTitle
        title={about.title}
        description={about.description}
      />

      <Card className="p-6">
        <p className="leading-8 text-zinc-300">
          {about.content}
        </p>

        <div className="mt-6">
          <Button
            href="/about"
            variant="secondary"
          >
            More about me
          </Button>
        </div>
      </Card>
    </Section>
  )
}
