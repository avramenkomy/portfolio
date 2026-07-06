import Container from './Container';

export default function Section(props) {
  const { id, children, className="" } = props;

  return (
    <section id={id} className={`py-24 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  )
}