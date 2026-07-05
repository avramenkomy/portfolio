import Link from 'next/link';

import navigation from '@/data/navigation';

export default function Header() {
  return (
    <header className="border-b border-zinc-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          Mikhail
        </Link>

        <nav>
          <ul className="flex gap-6">
            {navigation.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-blue-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}