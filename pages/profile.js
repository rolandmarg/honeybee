import { useUser } from '../lib/hooks';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { getAuthPayload } from '../lib/auth/helpers';

export default function Home({ initialData }) {
  const { user } = useUser({ initialData, redirectOnFailure: '/login' });

  return (
    <Layout>
      <Header title='profile' />
      {JSON.stringify(user)}
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getAuthPayload(req);

  return { props: { initialData: { user: session } } };
}
