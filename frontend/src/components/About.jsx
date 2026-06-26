// ===========================
// About.jsx
// About section with personal intro, stats, and personality
// ===========================

import React from "react";
import "./About.scss";

// Key stats — shows at a glance credentials
const STATS = [
  { value: "8.51",  label: "CGPA",            suffix: "/10" },
  { value: "70+",   label: "DSA Problems",     suffix: "" },
  { value: "2+",    label: "Live Projects",    suffix: "" },
  { value: "2nd",   label: "Coding Contest",   suffix: " Rank" },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="section-wrapper">

        {/* Section heading */}
        <h2 className="about__title">About Me</h2>

        <div className="about__body">

          {/* Left — text content */}
          <div className="about__text">
            <p className="about__intro">
              I'm a final-year <span className="about__highlight">B.Tech CSE</span> student
              at Supaul College of Engineering, Bihar — passionate about building web applications
              that are functional, fast, and user-friendly.
            </p>
            <p>
              My focus is on the <span className="about__highlight">MERN stack</span> — building
              everything from RESTful APIs and database schemas to interactive React frontends.
              I enjoy architecting clean, scalable systems and weaving AI APIs into real-world apps.
            </p>
            <p>
              Outside of web dev, I enjoy solving DSA problems, participating in college coding
              contests, and exploring how <span className="about__highlight">AI</span> can be woven
              into everyday applications.
            </p>

            {/* Contact info row */}
            <div className="about__info-row">
              <div className="about__info-item">
                <span className="about__info-label">📍 Location</span>
                <span>Bihar, India</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">📧 Email</span>
                <a href="mailto:mdsarfaraaz86@gmail.com">mdsarfaraaz86@gmail.com</a>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">📱 Phone</span>
                <span>+91 9958914755</span>
              </div>
            </div>
          </div>

          {/* Right — stats cards */}
          <div className="about__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="about__stat-card">
                <span className="about__stat-value">
                  {stat.value}
                  <small>{stat.suffix}</small>
                </span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
