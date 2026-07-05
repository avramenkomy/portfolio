import Container from './Container';

export default function Section(props) {
  const { children, className="" } = props;

  return (
    <section className={`py-24 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  )
}