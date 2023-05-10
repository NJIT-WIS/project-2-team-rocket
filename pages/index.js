import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React from 'react'
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer'
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { initGA, logPageView } from '../lib/analytics';
import { useRouter } from 'next/router';
export default function Home({ allPostsData }) {
    const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    router.events.on('routeChangeComplete', logPageView);
    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, [router.events]);

  return (
    <Layout home={true}>
        <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LERWW2ZVSY"
        />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LERWW2ZVSY');
          `}
        </script>
            <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <section className={utilStyles.headingMd}>
        <p>Welcome to MyWebClass.org: Pioneering the Future of Education.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
        <Footer></Footer>
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
