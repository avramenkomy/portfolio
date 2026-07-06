import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import Section from '@/components/ui/Section';
import profile from '@/data/profile';
import HeroImage from '@/components/hero/HeroImage';


export default function Hero() {
  return (
    <Section>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Badge>{profile.role}</Badge>

          <div className="mt-6">
            <Heading>
              Hello,
              <br />
              I'm {profile.firstName} 👋
            </Heading>
          </div>

          <div className="mt-8 max-w-xl">
            <Paragraph>
              {profile.description}
            </Paragraph>
          </div>

          <div className="mt-10 flex gap-4">
            <Button href="/projects">
              Projects
            </Button>

            <Button
              href="/contact"
              variant="secondary"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <HeroImage />

        {/* <div className="absolute -inset-4 -z-10 rounded-full bg-yellow-500/20 blur-3xl" /> */}
      </div>
    </Section>
  )
}
