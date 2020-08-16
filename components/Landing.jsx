import Logo from './Logo';
import Navbar from './Navbar';

export default function Landing() {
  return (
    <div className='w-screen h-screen relative bg-gradient-indigo'>
      <div className='md:mx-8 lg:pt-4 lg:mx-12 flex justify-between'>
        <Logo />
        <Navbar />
      </div>

      <main className=''>
        <img
          className='my-8 h-56 mx-auto'
          src='/logo.svg'
          alt='landing photo'
        />
        <p className='p-2 text-center text-3xl font-bold tracking-tight'>
          We are the <span className='text-watermelon'>Future</span>
        </p>
        <div className='mt-4 flex justify-center'>
          <button className='btn btn-indigo m-4 w-28 h-14'>Apply</button>
          <button className='btn btn-indigo m-4 w-28 h-14'>Hire</button>
        </div>
      </main>
    </div>
  );
}
