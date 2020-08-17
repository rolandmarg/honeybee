import Head from 'next/head';
import Logo from './Logo';
import Navbar from './Navbar';

export default function Header({ title }) {
  if (!title) {
    title = 'Frost';
  } else {
    title = title + ' | Frost';
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex justify-between bg-black text-white shadow-md'>
        <div className='m-3'>
          <Logo />
        </div>
        <div className='m-4'>
          <Navbar />
        </div>
      </div>
    </>
  );
}
