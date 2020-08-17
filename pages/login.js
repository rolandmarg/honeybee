import { useUser } from '../lib/hooks';
import Layout from '../components/Layout';
import Header from '../components/Header';
import LinkedinLogo from '../components/logo/linkedin';
import TwitterLogo from '../components/logo/twitter';
import GoogleLogo from '../components/logo/google';
import FacebookLogo from '../components/logo/facebook';

const Login = () => {
  useUser({ redirectOnSuccess: '/' });

  return (
    <Layout>
      <Header title='login' />
      <div className='relative bg-indigo-50 text-center shadow-xl rounded-sm max-w-sm p-4 pt-8 mt-24 md:mt-32 lg:mt-48 mx-auto'>
        <h1 className='text-4xl font-hairline'>Sign in</h1>
        <div className='py-8 px-6 text-xl font-thin text-white'>
          <a href='/api/v1/login/facebook'>
            <div className='bg-facebook-blue p-2 mb-2'>
              <FacebookLogo className='inline w-8 h-10' />
            </div>
          </a>
          <a href='/api/v1/login/google'>
            <div className='bg-google-red p-2 mb-2'>
              <GoogleLogo className='inline w-8 h-10' />
            </div>
          </a>
          <a href='/api/v1/login/twitter'>
            <div className='bg-twitter-blue p-2 mb-2'>
              <TwitterLogo className='inline w-8 h-10' />
            </div>
          </a>
          <a href='/api/v1/login/linkedin'>
            <div className='bg-linkedin-cyan p-2 mb-2'>
              <LinkedinLogo className='inline w-8 h-10' />
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
