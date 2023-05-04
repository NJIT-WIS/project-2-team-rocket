import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Services() {
  return (
  <Layout home={true}>
      <Head>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-LERWW2ZVSY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-LERWW2ZVSY');
</script>

        <title>{siteTitle} | Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        At MyWebClass.org, we offer two main services to support educators and schools in transforming education for the AI-driven world:
        </p>
        <ul>
          <li>Professional Development: We offer workshops, webinars, and coaching sessions on Agile methodologies, design thinking, lean startup methodologies, project-based learning, and data science and AI education.</li>
          <li>Customized Training and Support: We provide customized curriculum development, teacher training, and school-wide support to help schools adopt our approach.</li>
        </ul>
        <p>
        Our services are delivered by experienced educators who have a deep understanding of the challenges and opportunities of the AI-driven world. If you're interested in learning more about our services, please contact us at services@mywebclass.org.
        </p>
        </section>
    </Layout>
  );
}
