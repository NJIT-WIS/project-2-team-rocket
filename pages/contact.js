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
        <div className="text-center">
          <h2>Company Information</h2>
          <p>
            Phone number: 732-111-2222<br />
            Email: mywebclass@gmail.com<br />
            Address: 123 Main St, Newark, NJ 07101
          </p>
        </div>
        <h2>Contact Us!</h2>
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required/>
            </div>
            <div className="col">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" className="form-control" id="phone" name="phone" required/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
            </div>
          </div>

          <div className="row p-1">
            <div className="col text-center">
              <button type="submit" className="btn btn-primary mx-auto">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  )
}