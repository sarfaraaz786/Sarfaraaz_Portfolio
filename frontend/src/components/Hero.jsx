// ===========================
// Hero.jsx
// Full-screen landing section with:
//  - Name: "Md Sarfaraaz"
//  - Typing animation cycling through roles
//  - CTA buttons
//  - Background particle grid
// ===========================

import React, { useState, useEffect } from "react";
import "./Hero.scss";

// Roles cycle through the typing animation
const TYPING_ROLES = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "DSA in Java",
  "React.js Developer",
  "Node.js Developer",
  "AI Integration Dev",
];

function Hero() {
  const [displayText, setDisplayText]   = useState("");  // Currently visible text
  const [roleIndex,   setRoleIndex]     = useState(0);   // Which role is being typed
  const [charIndex,   setCharIndex]     = useState(0);   // How many chars are shown
  const [isDeleting,  setIsDeleting]    = useState(false); // Typing or deleting?

  // Core typing effect loop
  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Still typing — add one more character
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // Finished typing the whole word — pause then start deleting
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500); // 1.5s pause at end
        }
      } else {
        // Deleting — remove one character
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        // Finished deleting — move to next role
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
        }
      }
    }, isDeleting ? 60 : 90); // Delete faster than type

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      {/* Scanline CRT overlay */}
      <div className="scanlines" aria-hidden="true" />

      {/* Animated grid background */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Floating neon orbs in background */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* Main content */}
      <div className="hero__content">

        {/* Greeting badge */}
        <p className="hero__greeting">
          <span className="hero__greeting-dot" />
          Available for opportunities
        </p>

        {/* Name — primary headline */}
        <h1 className="hero__name">
          Md Sarfaraaz
        </h1>

        {/* Typing animation — role cycles */}
        <div className="hero__role-wrapper" aria-live="polite">
          <span className="hero__role">
            {displayText}
            <span className="hero__cursor" aria-hidden="true">|</span>
          </span>
        </div>

        {/* Short tagline */}
        <p className="hero__tagline">
          Building fast, functional & AI-powered web apps with the MERN stack.
          <br />
          Turning ideas into production-ready products.
        </p>

        {/* CTA Buttons */}
        <div className="hero__cta">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            Let's Talk
          </a>
        </div>

        {/* Social links */}
        <div className="hero__socials">
          <a
            href="https://www.linkedin.com/in/md-sarfaraaz-b7b6b42a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <span className="hero__social-divider" aria-hidden="true">·</span>
          <a
            href="https://github.com/sarfaraaz786"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <span className="hero__social-divider" aria-hidden="true">·</span>
          <a
            href="mailto:mdsarfaraaz86@gmail.com"
            className="hero__social-link"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
