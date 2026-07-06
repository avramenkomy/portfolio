import Container from './Container';

import { cn } from '@/lib/utils';

export default function Section(props) {
  const { id, children, className="" } = props;

  return (
    <section
      id={id}
      className={cn("py-24", className)}
    >
      <Container>
        {children}
      </Container>
    </section>
  )
}