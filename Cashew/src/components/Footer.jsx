
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-container container">
        <h4>Pratipa Cashews</h4>
        <p>Premium Cashew Exporter | Quality You Can Trust</p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Pratipa Cashews. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


