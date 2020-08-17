import { useUser } from '../lib/hooks';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Login = () => {
  useUser({ redirectOnSuccess: '/' });

  return (
    <Layout>
      <Header title='login' />
      <p>this is login page</p>
      <a href='/api/v1/login/google'>sign in with google</a>
      <button>sign in with linkedin</button>
    </Layout>
  );
};

export default Login;
