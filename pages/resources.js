import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/footer";
import Link from "next/link";
import React from "react";
import Button from "../components/button";

export default function Resources() {
  return (
    <Layout home={true}>
      <Head>

        <title>{siteTitle} | Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          At MyWebClass.org, we believe in sharing knowledge and resources to empower educators and students with the skills they need to succeed in the AI-driven world. Here are two resources we offer:
        </p>
        <ul>
          <li>
            <strong>Academic Articles:</strong> Our team of experts has published academic articles on various topics related to AI education, Agile methodologies, and project-based learning. These articles are available for free download on our website and cover topics such as "Implementing Agile Principles in the Classroom" and "Using AI in K-12 Education."
          </li>
          <li>
            <strong>Webinars & Workshops:</strong> We offer webinars and workshops on various topics related to AI education, Agile methodologies, and project-based learning. These events are led by experienced educators and are designed to be interactive and engaging. Our webinars and workshops cover topics such as "Introduction to AI Education" and "Project-Based Learning for the AI-Driven World."
          </li>
        </ul>
        <p>
          To access our academic articles and upcoming webinars and workshops, please visit our website or sign up for our newsletter to stay updated on our latest resources and events.
        </p>
      </section>
      <div className="container d-flex align-items-center justify-content-center">
          <div className="text-center">
            <Link href="http://eepurl.com/iqwWt2">
              <button className="btn btn-lg btn-outline-primary">
                Sign Up to Volunteer
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  );
}
