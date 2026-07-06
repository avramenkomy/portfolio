import Link from 'next/link';

import { cn } from '@/lib/utils';

export default function Button(props) {
  const { href, children, variant='primary', className='' } = props;

  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'border border-zinc-700 hover:bg-zinc-900',
  }

  const buttonClassName = cn(
    'inline-flex items-center justify-center rounded-lg px-6 py-3',
    'font-medium transition',
    variants[variant],
    className
  );

  const isExternal = href?.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={buttonClassName}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClassName}>
      {children}
    </Link>
  )
}
