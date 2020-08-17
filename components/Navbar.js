import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Transition from './Transition';
import { useUser } from '../lib/hooks';

export default function Navbar() {
  const { user } = useUser();

  return (
    <div className='relative'>
      <div className='hidden sm:block'>
        <NavHorizontal user={user} />
      </div>
      <div className='sm:hidden'>
        <NavVertical user={user} />
      </div>
    </div>
  );
}

function NavHorizontal({ user }) {
  return (
    <>
      <ul className='mr-4 flex text-xl text-center space-x-6'>
        <li>About us</li>
        <li>Company</li>
        <li>Jobs</li>
        <li>Contact</li>
        {user ? (
          <li>
            <UserMenu user={user} />
          </li>
        ) : (
          <li>
            <Link href='/login'>
              <a>Sign in</a>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}

function UserMenu({ user }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <button
        type='button'
        onClick={() => setIsOpen((prevState) => !prevState)}
        className='focus:outline-none transition duration-150 ease-in-out'
        id='user-menu'
        aria-label='user menu'
        aria-haspopup='true'
      >
        <div className='flex justify-between'>
          <img
            className='rounded-full w-8 h-8'
            alt='profile photo'
            src={user?.photo}
          />
          <svg
            className='pt-2 w-8 h-8'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </div>
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
          className='absolute right-0 mt-4 w-64 bg-white rounded-md text-xl text-black'
          role='user menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu'
        >
          <p className='border-b p-2'>
            👋, <span className='pl-2'>{user?.name}</span>
          </p>
          <ul className='p-2 pl-4'>
            <li>
              <Link href='/profile'>
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <a href='/api/v1/logout'>Sign out</a>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

function NavVertical({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen((prevState) => !prevState)}
        className='focus:outline-none transition duration-150 ease-in-out'
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
          className='absolute right-0 mt-4 w-48 bg-white rounded-md text-xl text-black'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='main-menu'
        >
          <ul className='divide-y divide-gray-400 px-2'>
            <li>About us</li>
            <li>Company</li>
            <li>Jobs</li>
            <li>Contact</li>
            {user ? (
              <>
                <li>
                  <Link href='/profile'>
                    <a>
                      <div className='flex'>
                        <img
                          className='rounded-full w-6 h-6 mt-1 mr-2'
                          alt='profile photo'
                          src={user?.photo}
                        />
                        <span>Profile</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href='/api/v1/logout'>Sign out</a>
                </li>
              </>
            ) : (
              <li>
                <Link href='/login'>
                  <a>Sign in</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Transition>
    </>
  );
}
