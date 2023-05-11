import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/footer";
import Link from "next/link";
import React from "react";
import Button from "../components/button";

export default function About() {
  return (
  <Layout home={true}>
      <Head>
        <title>{siteTitle} | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Our mission is to conduct research, develop resources and tools, offer professional development opportunities, and collaborate with schools and educators to foster a culture of continuous improvement, collaboration, and adaptability. We also address the cognitive and mental health challenges faced by students in this rapidly changing world.
        </p>
        </section>
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <Link href="http://eepurl.com/iqwWt2">
              <button className="btn btn-outline-primary btn-lg">
                Sign Up to Volunteer
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  );
}