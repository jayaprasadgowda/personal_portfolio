import Head from 'next/head';
import Header from '../components/Header';

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Portfolio</title>
      </Head>
      <Header />
      <section>
        <h1>Portfolio</h1>
        {/* Add your portfolio projects here */}
      </section>
    </div>
  );
};

export default Portfolio;
