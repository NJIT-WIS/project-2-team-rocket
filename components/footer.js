import React from 'react'
import utilStyles from "../styles/utils.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const mailchimpUrl = 'http://eepurl.com/iqwWt2';

  const handleMailchimpClick = () => {
    window.location.href = mailchimpUrl;
  };

  return (
    <footer className="bg-light py-4">
      <div className="container text-center">
        <p className="mb-0">Sign up for our newsletter:</p>
        <a href="#" className="btn btn-primary" onClick={handleMailchimpClick}>Subscribe</a>
      </div>
    </footer>
  );
};

export default Footer;
