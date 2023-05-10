import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
  integrity="sha384-pzjw35zEv3d1bY6qzltzxg78zUcb1X9z8Rn38s9AlQLUn8kR/PWDCSMbGXJnzgo9"
  crossorigin="anonymous"
/>

export default function Blog({ allPostsData }) {
  return (
  <Layout home={true}>
      <Head>
        <title>{siteTitle} | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
  <h2 className={utilStyles.headingLg}>Blog</h2>
  <div className="card-deck">
    {allPostsData.map(({ id, date, title }) => (
      <div className="card" key={id}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small className="text-muted">
              <Date dateString={date} />
            </small>
          </p>
          <Link href={`/posts/${id}`}>
            <a className="btn btn-primary">Read More</a>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>
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
