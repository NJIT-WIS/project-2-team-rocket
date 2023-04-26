import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import React from 'react'
import "../layout.module.css"
import "../css/customcss.css";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AcademicArticles() {
  return (
  <Layout home={true}>
      <Head>
        <title>Academic Articles</title>
      </Head>
      <div className="container mt-5">
        <h1>Thank you for visiting our website!</h1>
        <p>
        We are currently working on making some exciting improvements to our site to bring you a better user experience. We apologize for any inconvenience this may cause.
        </p>
        <p>
        Our team is hard at work creating new content, designing new features, and improving the overall functionality of the site. We want to make sure that our website provides you with the information you need, and that it is easy to navigate and use.
        </p>
        <p>
        While we are under construction, you may notice some parts of the site that are not fully functional or that are still being developed. We appreciate your patience as we work to complete these improvements.
        </p>
        <p>
        If you have any questions or concerns, please feel free to <a href="/contact">contact us</a>. We value your feedback and want to make sure that we are meeting your needs as best we can.
        </p>
        <p>
        Thank you for your understanding, and we look forward to sharing our new and improved website with you soon!
        </p>
      </div>
    </Layout>
  );
}