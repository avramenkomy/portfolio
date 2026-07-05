import Link from 'next/link';

export default function Button(props) {
  const { href, children, variant='primary' } = props;

  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'border border-zinc-700 hover:bg-zinc-900',
  }

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        rounded-lg
        px-6
        py-3
        font-medium
        transition
        ${variants[variant]}
      `}
    >
      {children}
    </Link>
  )
}
