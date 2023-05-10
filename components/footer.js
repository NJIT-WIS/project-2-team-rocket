import React from 'react'
import utilStyles from "../styles/utils.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const mailchimpUrl = 'http://eepurl.com/iqwWt2';

  const handleMailchimpClick = () => {
    window.location.href = mailchimpUrl;
  };

  return (
    <footer className="py-4 position-static">
      <div className="text-center">
        <p className="mb-0">Sign up to volunteer:</p>
        <a href="#" className="btn btn-primary" onClick={handleMailchimpClick}>Subscribe</a>
      </div>
    </footer>
  );
};

export default Footer;
