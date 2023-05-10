import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
  <Layout home={true}>
      <Head>

<script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-LERWW2ZVSY" >
    </script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LERWW2ZVSY')
    </script>


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