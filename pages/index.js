import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React from 'react'
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'next-i18next'


export default function Home({ allPostsData }) {
  const { t } = useTranslation('home')

  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t('homePageDescription')} />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{t(welcomeMessage)}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{t('blogSectionHeading')}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {t('postedOnText')} <Date dateString={date} />
              </small>
              <br />
              <Link href={`/posts/${id}`}>
                <a>{t('readMoreLinkText')}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/posts">
          <a>{t('allPosts')}</a>
        </Link>
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
