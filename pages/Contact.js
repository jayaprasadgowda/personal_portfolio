import Head from 'next/head';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Me - Portfolio</title>
      </Head>
      <Header />
      <section>
        <h1>Contact Me</h1>
        {/* Add your contact form and details here */}
      </section>
    </div>
  );
};

export default Contact;
