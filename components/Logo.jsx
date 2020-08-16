import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <a className='p-4 text-4xl tracking-tight font-bold' aria-label='Home'>
        Home
      </a>
    </Link>
  );
}
