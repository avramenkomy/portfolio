'use client';

import { useState } from 'react';
import Link from 'next/link';

import navigation from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu(event) {
    event.preventDefault();
    event.stopPropagation();

    setIsOpen((current) => !current);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        className="relative z-50 flex h-11 w-11 touch-manipulation select-none appearance-none items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--foreground) transition active:scale-95"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span className="pointer-events-none relative block h-4 w-5">
          <span
            className={cn(
              'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200',
              isOpen && 'translate-y-1.75 rotate-45'
            )}
          />

          <span
            className={cn(
              'absolute left-0 top-1.75 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200',
              isOpen && 'opacity-0'
            )}
          />

          <span
            className={cn(
              'absolute left-0 top-3.5 h-0.5 w-5 rounded-full bg-current transition-transform duration-200',
              isOpen && '-translate-y-1.75 -rotate-45'
            )}
          />
        </span>
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-(--overlay) md:hidden"
          />

          <div className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-(--border) bg-(--surface)/95 p-6 shadow-2xl backdrop-blur-xl md:hidden">
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-(--muted-foreground) transition hover:bg-(--surface-hover) hover:text-(--foreground) active:bg-(--surface-hover) active:text-(--foreground)"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}