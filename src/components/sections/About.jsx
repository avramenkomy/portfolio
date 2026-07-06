import Section from '../ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

import about from '@/data/about';


export default function About() {
  return (
    <Section id="about">
      <SectionTitle
        title={about.title}
        description={about.description}
      />

      <Card>
        <p>{about.content}</p>
      </Card>
    </Section>
  )
}
