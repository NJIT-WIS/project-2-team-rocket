import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Resources() {
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

        <title>{siteTitle} | Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          At MyWebClass.org, we believe in sharing knowledge and resources to empower educators and students with the skills they need to succeed in the AI-driven world. Here are two resources we offer:
        </p>
        <ul>
          <li>
            <strong>Academic Articles:</strong> Our team of experts has published academic articles on various topics related to AI education, Agile methodologies, and project-based learning. These articles are available for free download on our website and cover topics such as "Implementing Agile Principles in the Classroom" and "Using AI in K-12 Education."
          </li>
          <li>
            <strong>Webinars & Workshops:</strong> We offer webinars and workshops on various topics related to AI education, Agile methodologies, and project-based learning. These events are led by experienced educators and are designed to be interactive and engaging. Our webinars and workshops cover topics such as "Introduction to AI Education" and "Project-Based Learning for the AI-Driven World."
          </li>
        </ul>
        <p>
          To access our academic articles and upcoming webinars and workshops, please visit our website or sign up for our newsletter to stay updated on our latest resources and events.
        </p>
      </section>
    </Layout>
  );
}
