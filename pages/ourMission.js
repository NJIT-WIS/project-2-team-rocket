import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import styles from './layout.module.css'
import "../css/customcss.css";
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const name = "MyWebClass.org"
export const siteTitle = 'MyWebClass.org'

export default function About() {
  return (
  <Layout home={true}>
      <Head>
        <title>{siteTitle} | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        MyWebClass.org, a foundation committed to revolutionizing education by incorporating Agile and Lean principles into the classroom, is at the forefront of this transformation. Our mission encompasses conducting research on effective strategies, developing resources and tools, offering professional development opportunities, and collaborating with schools and educators to foster a culture of continuous improvement, collaboration, and adaptability.        </p>
        </section>
    </Layout>
  );
}