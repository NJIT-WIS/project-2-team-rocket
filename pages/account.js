import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import React from 'react'
import utilStyles from "../styles/utils.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/footer";
import Link from "next/link";
import Button from "../components/button";

export default function Account() {
  return (
    <Layout home={true}>
      <Head>

        <title>{siteTitle} | Account</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Account Information</h2>
        <p>
          Welcome back! Here's some information about your account:
        </p>
        <ul className={utilStyles.list}>
          <li>Name: John Doe</li>
          <li>Email: john.doe@example.com</li>
          <li>Membership level: Premium</li>
          <li>Subscription status: Active</li>
        </ul>
      </section>
    </Layout>
  )
}