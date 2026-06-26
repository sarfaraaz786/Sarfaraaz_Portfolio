// ===========================
// Footer.jsx
// Clean minimal footer with copyright and social links
// ===========================

import React from "react";
import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Brand */}
        <span className="footer__brand">
          <span className="footer__bracket">&lt;</span>
          Md Sarfaraaz
          <span className="footer__bracket">/&gt;</span>
        </span>

        {/* Copyright */}
        <p className="footer__copy">
          © {year} Md Sarfaraaz. Built with MERN Stack.
        </p>

        {/* Links */}
        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/md-sarfaraaz-b7b6b42a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sarfaraaz786"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a href="mailto:mdsarfaraaz86@gmail.com" className="footer__link">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
