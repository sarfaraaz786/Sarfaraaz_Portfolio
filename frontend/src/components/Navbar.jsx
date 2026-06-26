// ===========================
// Navbar.jsx
// Sticky navigation with neon accent + resume download button
// Collapses to hamburger on mobile
// ===========================

import React, { useState, useEffect } from "react";
import "./Navbar.scss";

// Navigation links — each maps to a section ID on the page
const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

function Navbar() {
  const [scrolled,    setScrolled]    = useState(false); // background blur when scrolled
  const [menuOpen,    setMenuOpen]    = useState(false); // mobile menu toggle
  const [activeLink,  setActiveLink]  = useState("#home");

  // Add background blur after user scrolls 50px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  // Download resume by calling backend API
  const handleDownloadResume = () => {
    window.open(`${import.meta.env.VITE_API_URL}/api/resume/download`, "_blank");
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        {/* Logo / Brand */}
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          Sarfaraaz
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${activeLink === link.href ? "navbar__link--active" : ""}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Download Button */}
        <button className="navbar__resume-btn" onClick={handleDownloadResume}>
          Download CV
        </button>

        {/* Hamburger — mobile only */}
        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => handleLinkClick(link.href)}
          >
            {link.label}
          </a>
        ))}
        <button className="navbar__resume-btn navbar__resume-btn--mobile" onClick={handleDownloadResume}>
          Download CV
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
