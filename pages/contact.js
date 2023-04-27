import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import React from 'react'
import utilStyles from "../styles/utils.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle} | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Company Information</h2>
        <p>
          Phone number: 732-111-2222<br />
          Email: mywebclass@gmail.com<br />
          Address: 123 Main St, Newark, NJ 07101
        </p>
        <h2>Contact Us!</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required /><br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea><br />

          <button type="submit">Submit</button>
        </form>
      </section>
    </Layout>
  )
}