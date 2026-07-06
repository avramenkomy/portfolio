import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';


export default function NotFound() {
  return (
    <main className="py-24">
      <Container>
        <Card
          hover={false}
          className="relative overflow-hidden p-8 text-center sm:p-12"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              404
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
              Page not found
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
              The page you are looking for does not exist or has been moved.
            </p>

            <div className="mt-8">
              <Button href="/">
                Back to home
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </main>
  )
}