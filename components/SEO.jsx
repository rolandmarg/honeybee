import Head from 'next/head';

export default function SEO({ title = 'Frost' }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.svg' />
    </Head>
  );
}
