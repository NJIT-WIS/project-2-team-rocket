import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useState } from 'react';
import Link from 'next/link';
import React from 'react'
import "./layout.module.css"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const name = "MyWebClass.org"
export const siteTitle = 'MyWebClass.org'

export default function Layout({ children, home }) {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

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

    <nav className={styles.navbar}>
        <Link href="/">
            <span className={styles.navlink + (home ? ` ${styles.active}` : '')}>Home</span>
        </Link>

        <div className={styles.dropdownContainer}>
        <Link href="/about">
    <a
      className={styles.navlink}
      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
    >
      About {isAboutDropdownOpen ? '▲' : '▼'}
    </a>
  </Link>
        {isAboutDropdownOpen && (
    <ul className={styles.dropdown}>
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
  )}
        </div>

        <Link href="/Agile_and_Lean_principles">
            <a className={styles.navlink}>Agile and Lean Principles</a>
        </Link>

        <Link href="/blog">
            <a className={styles.navlink}>Blog</a>
        </Link>

        <div className={styles.dropdownContainer}>
        <Link href="/resources">
        <a
          className={styles.navlink}
          onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
        >
          Resources {isResourcesDropdownOpen ? '▲' : '▼'}
        </a>
      </Link>

          {isResourcesDropdownOpen && (
            <ul className={styles.dropdown}>
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
          )}
        </div>

        <div className={styles.dropdownContainer}>
          <Link href="/services">
            <a
              className={styles.navlink}
              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
            >
              Services {isServiceDropdownOpen ? '▲' : '▼'}
            </a>
          </Link>
          {isServiceDropdownOpen && (
            <ul className={styles.dropdown}>
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
          )}
        </div>
        <Link href="/contact">
            <a className={styles.navlink}>Contact</a>
        </Link>

        <Link href="/account">
            <a className={styles.navlink}>Account</a>
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