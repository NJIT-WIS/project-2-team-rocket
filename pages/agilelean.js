import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AgileAndLean() {
  return (
  <Layout home={true}>
      <Head>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-LERWW2ZVSY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LERWW2ZVSY');
</script>

        <title>{siteTitle} | Agile and Lean Principles</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
        Agile and Lean principles have been widely used in software development and manufacturing, but they also have significant applications in education. By embracing these principles, educators can create a flexible, adaptive, and student-centered learning environment.
        </p>
        <p>
        Incorporating Agile and Lean principles in the classroom promotes critical thinking, problem-solving, and collaboration among students. These principles also cultivate a growth mindset and a focus on continuous improvement, which are fundamental to lifelong learning.
        </p>
        <p>
        Agile and Lean principles emphasize the importance of responsiveness to change, efficiency, and maximizing value for the student. Educators who adopt these principles can improve the overall learning experience for their students. The principles also encourage experimentation and innovation in teaching, which can lead to more effective and engaging learning experiences.
        </p>
        <p>
        In summary, Agile and Lean principles provide a framework for creating a dynamic and effective learning environment that is responsive to student needs, encourages growth and innovation, and fosters lifelong learning.
        </p>
        </section>
    </Layout>
  );
}