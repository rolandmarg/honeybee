import Head from 'next/head';
import HomeLogo from '../components/logo/home';
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
      <div className='flex justify-between bg-black text-white shadow-md h-16'>
        <div className='mt-3 ml-3'>
          <HomeLogo />
        </div>
        <div className='m-4'>
          <Navbar />
        </div>
      </div>
    </>
  );
}
