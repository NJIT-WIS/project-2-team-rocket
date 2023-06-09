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
        Are you passionate about transforming education for the AI-driven world? Do you want to make a difference in your community by empowering students with the skills they need to succeed in the future job market? Then MyWebClass.org is the perfect place for you to volunteer and make an impact!
        </p>
        <p>
        As a volunteer for MyWebClass.org, you will be part of a team that is committed to revolutionizing education. By incorporating Agile and Lean principles into the classroom, we aim to nurture creativity, adaptability, and collaboration in students. Our goal is to create a culture of continuous improvement, where students are prepared for the challenges and opportunities of the AI-driven world.
        </p>
        <p>
        As a volunteer, you will have the opportunity to conduct research, develop resources and tools, and collaborate with schools and educators to create a network of professionals dedicated to improving education. You will be contributing to a cause that is not only important but also rewarding.
        </p>
        <p>
        The impact of your volunteer work will extend beyond the classroom. By empowering students with the skills they need to succeed, you will be contributing to the future of your community. As more and more jobs require skills in AI, data science, and other emerging fields, your volunteer work will help prepare the next generation for success.
        </p>
        <p>
        Join us in this essential journey of transforming education for the AI-driven world. Volunteer for MyWebClass.org and make a difference in your community today!
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