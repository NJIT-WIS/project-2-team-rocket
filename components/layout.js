import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'


import React from 'react'
import "./layout.module.css"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

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

 <nav className={`navbar navbar-expand-lg navbar-dark bg-teal ${styles.navbar}`}>
  <Link href="/">
    <a className={`${styles.homeLink} navbar-brand`}>
      <strong>MyWebClass.org</strong>
    </a>
  </Link>

  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={`collapse navbar-collapse ${styles.links}`} id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/blog">
          <a className={`${styles.navlink} nav-link`}>Blog</a>
        </Link>
      </li>

      <li className={`nav-item dropdown ${styles.dropdownContainer}`}>
        <a
          className={`${styles.navlink} nav-link dropdown-toggle`}
          href="#"
          id="navbarDropdown1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Agile and Lean Principles
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
          <li>
            <Link href="/resources#academic-articles">
              <a className={styles.dropdownLink}>Academic Articles</a>
            </Link>
          </li>
          <li>
            <Link href="/webinar">
              <a className={styles.dropdownLink}>Webinars and Workshops</a>
            </Link>
          </li>
        </ul>
      </li>

      <li className={`nav-item dropdown ${styles.dropdownContainer}`}>
        <a
          className={`${styles.navlink} nav-link dropdown-toggle`}
          href="#"
          id="navbarDropdown2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Services ▼
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
          <li>
            <Link href="/professional">
              <a className={styles.dropdownLink}>Professional Development</a>
            </Link>
          </li>
          <li>
            <Link href="/training">
              <a className={styles.dropdownLink}>Customized Training and Support</a>
            </Link>
          </li>
        </ul>
      </li>

      <li className={`nav-item dropdown ${styles.dropdownContainer}`}>
        <a
          className={`${styles.navlink} nav-link dropdown-toggle`}
          href="#"
          id="navbarDropdown3"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About ▼
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
          <li>
            <Link href="/ourMission">
              <a className={styles.dropdownLink}>Our Mission</a>
            </Link>
          </li>
          <li>
            <Link href="/about#partnerships-and-affiliations">
              <a className={styles.dropdownLink}>Partnerships and Affiliations</a>
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <Link href="/contact">
          <a className={`${styles.navlink} nav-link`}>Contact</a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/account">
          <a className={`${styles.navlink} nav-link`}>
                        <Image src="/accountlogo.png" alt="account logo" width={20} height={20} />
          </a>
        </Link>
      </li>

      </div>
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