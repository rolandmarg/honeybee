import Link from 'next/link';
import { useState } from 'react';
import Transition from './Transition';
import { useUser } from '../lib/hooks';

export default function Navbar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <div className='hidden sm:block'>
        <ul className='mr-4 flex flex-row text-xl text-center space-x-6'>
          <li>About us</li>
          <li>Company</li>
          <li>Jobs</li>
          <li>Contact</li>
          <li>
            <a href='/api/v1/logout'>logout</a>
          </li>
          {user && (
            <li>
              <Link href='/profile'>
                <a>Profile</a>
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link href='/login'>
                <a>Sign in</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className='sm:hidden'>
        <button
          type='button'
          onClick={() => setIsOpen((prevState) => !prevState)}
          className='rounded-md focus:outline-none transition duration-150 ease-in-out'
          id='main-menu'
          aria-label='Main menu'
          aria-haspopup='true'
        >
          <svg
            className='h-8 w-8'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div
            className='absolute right-0 mt-4 w-screen bg-indigo-400 rounded-md shadow-outline-pink'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='main-menu'
          >
            <ul className='text-gray-900 text-2xl text-center font-semibold'>
              <li>About us</li>
              <li>Company</li>
              <li>Jobs</li>
              <li>Contact</li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
