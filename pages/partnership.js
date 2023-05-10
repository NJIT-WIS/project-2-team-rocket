import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Partners() {
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


        <title>{siteTitle} | Partners and Affiliations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Partners and Affiliations</h2>
        <p>
          At MyWebClass.org, we are proud to partner with like-minded organizations and institutions who share our passion for transforming education for the AI-driven world. Together, we can make a greater impact and empower more students with the skills they need to succeed in the future job market.
        </p>
        <p>Here are some of our partners and affiliations:</p>
        <ul>
          <li>
            <strong>AI4All:</strong> AI4All is a nonprofit organization dedicated to increasing diversity and inclusion in AI education and research. We collaborate with AI4All to develop curriculum and resources that promote AI education and awareness among students from diverse backgrounds.
          </li>
          <li>
            <strong>Code.org:</strong> Code.org is a nonprofit organization that aims to expand access to computer science education. We partner with Code.org to bring computer science education to more schools and students.
          </li>
          <li>
            <strong>Lean In:</strong> Lean In is a global community dedicated to empowering women and promoting gender equality. We collaborate with Lean In to develop resources and tools that empower girls and young women to pursue STEM education and careers.
          </li>
          <li>
            <strong>Stanford d.school:</strong> The Stanford d.school is a design thinking institute at Stanford University. We collaborate with the d.school to incorporate design thinking principles into our education approach, fostering creativity and innovation among students.
          </li>
          <li>
            <strong>The Agile Alliance:</strong> The Agile Alliance is a nonprofit organization dedicated to advancing Agile principles and practices. We partner with the Agile Alliance to bring Agile methodologies into the classroom, fostering collaboration and adaptability among students.
          </li>
        </ul>
        <p>
          We are always looking for new partnerships and collaborations that can help us further our mission. If you are interested in partnering with us, please contact us at <a href="mailto:partnerships@mywebclass.org">partnerships@mywebclass.org</a>.
        </p>
      </section>
    </Layout>
  );
}
