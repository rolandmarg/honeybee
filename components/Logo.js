import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <a className='text-2xl font-bold' aria-label='Home'>
        Home
      </a>
    </Link>
  );
}
