import HeroBackground from '@/components/hero/HeroBackground';
import HeroImage from '@/components/hero/HeroImage';
import HeroTechStack from '@/components/hero/HeroTechStack';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import Container from '@/components/ui/Container';

import profile from '@/data/profile';


export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      <HeroBackground />

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Badge>{profile.role}</Badge>

            <div className="mt-6">
              <Heading>
                I create fast
                <br />
                digital products
                <br />
                for modern web.
              </Heading>
            </div>

            <div className="mt-8 max-w-2xl">
              <Paragraph>
                I {profile.firstName} {profile.lastName}, frontend developer.
                I work with React, JavaScript and Next.js, creating modern
                interfaces with a focus the impact on performance, adaptability,
                and user convenience.
              </Paragraph>
            </div>

            <HeroTechStack />

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/#projects">
                Show my projects
              </Button>

              <Button
                href="/#contact"
                variant="secondary"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <HeroImage />
        </div>
      </Container>
    </section>
  )
}
