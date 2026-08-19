import Link from 'next/link';
import MobileMenu from '@/components/layout/MobileMenu';
import ThemeToggle from '@/components/theme/ThemeToggle';

import navigation from '@/data/navigation';

export default function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-9999 isolate border-b border-(--border) bg-(--surface)/95 text-(--foreground) backdrop-blur-xl"
    >
      <div className="container relative z-10000 flex h-16 items-center justify-between">

        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-(--foreground) transition hover:text-(--accent)"
        >
          Mikhail
        </Link>

        <div className="flex items-center gap-3">
          <nav aria-label="General navigation">
            <ul className="hidden items-center gap-6 md:flex">
              {navigation.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-(--muted-foreground) transition hover:text-(--foreground)"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}