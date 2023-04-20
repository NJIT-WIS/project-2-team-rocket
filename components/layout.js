import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = "MyWebClass.org"
export const siteTitle = 'MyWebClass.org'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}

//        navbar
    <nav className={styles.navbar}>
        <Link href="/pages/index.js">
            <a className={styles.navlink + (home ? ` ${styles.active}` : '')}>Home</a>
        </Link>

        <Link href="/about.js">
            <a className={styles.navlink}>About ▼</a>
        </Link>
        <ul className={styles.dropdown}>
            <li><Link href="/about#mission"><a className={styles.dropdownLink}>Our Mission</a></Link></li>
            <li><Link href="/about#success-stories"><a className={styles.dropdownLink}>Success Stories</a></Link></li>
            <li><Link href="/about#our-team"><a className={styles.dropdownLink}>Our Team</a></Link></li>
            <li><Link href="/about#partnerships-and-affiliations"><a className={styles.dropdownLink}>Partnerships and Affiliations</a></Link></li>
        </ul>

        <Link href="/agile-and-lean-principles">
            <a className={styles.navlink}>Agile and Lean Principles</a>
        </Link>

        <Link href="/blog.js">
            <a className={styles.navlink}>Blog</a>
        </Link>

        <Link href="/resources">
            <a className={styles.navlink}>Resources ▼</a>
        </Link>
        <ul className={styles.dropdown}>
                <li><Link href="/resources#academic-articles"><a className={styles.dropdownLink}>Academic Articles</a></Link></li>
                <li><Link href="/resources#downloadable-guides"><a className={styles.dropdownLink}>Downloadable Guides</a></Link></li>
                <li><Link href="/resources#webinars-and-workshops"><a className={styles.dropdownLink}>Webinars and Workshops</a></Link></li>
        </ul>

        <Link href="/services">
            <a className={styles.navlink}>Services ▼</a>
        </Link>
        <ul className={styles.dropdown}>
            <li><Link href="/services#professional-development"><a className={styles.dropdownLink}>Professional Development</a></Link></li>
            <li><Link href="/services#customized-training-and-support"><a className={styles.dropdownLink}>Customized Training and Support</a></Link></li>
        </ul>

        <Link href="/contact">
            <a className={styles.navlink}>Contact</a>
        </Link>
    </nav>

      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  )
}