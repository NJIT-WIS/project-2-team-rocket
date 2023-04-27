import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
  <Layout home={true}>
      <Head>
        <title>{siteTitle} | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Our mission is to conduct research, develop resources and tools, offer professional development opportunities, and collaborate with schools and educators to foster a culture of continuous improvement, collaboration, and adaptability. We also address the cognitive and mental health challenges faced by students in this rapidly changing world.
        </p>
        </section>
    </Layout>
  );
}