import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ContactCTA from '@/components/sections/ContactCTA';
import InterviewCTA from '@/components/sections/InterviewCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <InterviewCTA />
      <ContactCTA />
    </>
  );
}
