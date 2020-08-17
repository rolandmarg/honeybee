import Layout from '../components/Layout';
import Landing from '../components/Landing';
import Header from '../components/Header';
import { useUser } from '../lib/hooks';
import { getAuthPayload } from '../lib/auth/helpers';

export default function Home({ initialData }) {
  useUser({ initialData });

  return (
    <Layout>
      <Header />
      <Landing />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getAuthPayload(req);

  return { props: { initialData: { user: session } } };
}
