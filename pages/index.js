import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React from 'react'
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ allPostsData }) {
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


        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Welcome to MyWebClass.org: Pioneering the Future of Education.</h2>
        <p>
        MyWebClass.org is an organization committed to revolutionizing education by incorporating Agile and Lean principles into the classroom. By empowering students with the skills they need to succeed in the AI-driven world, MyWebClass.org aims to create a culture of continuous improvement.
        </p>
        <p>
        Here are three reasons why it's good to volunteer for MyWebClass.org:
        </p>
        <ul>
            <li>Make an impact: Contribute to an important and rewarding cause that empowers students for the AI-driven world.</li>
            <li>Develop skills: Gain new skills, such as research, collaboration, and project management, that are valuable in any profession.</li>
            <li>Join a community: Connect with like-minded professionals and create opportunities for personal and professional growth.</li>
        </ul>

<div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <Link href="http://eepurl.com/iqwWt2">
          <Button color="teal" size="lg">
            Sign Up to Volunteer
          </Button>
        </Link>
      </div>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
