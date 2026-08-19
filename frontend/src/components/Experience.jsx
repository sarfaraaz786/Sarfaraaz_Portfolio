// ===========================
// Experience.jsx
// Showcases internship and professional experience
// ===========================

import React from "react";
import "./Experience.scss";

const EXPERIENCES = [
  {
    id: 1,
    role: "AI Web Development Intern",
    company: "InAmigos Foundation",
    duration: "Jun 2026 – Jul 2026",
    emoji: "🚀",
    description:
      "Worked on web development, UI/UX analysis, and full-stack application development. Contributed to building responsive web experiences and improving the usability of the foundation's website.",
    highlights: [
      "Built a fully responsive personal portfolio website",
      "Conducted website improvement and UX analysis",
      "Developed a full-stack e-commerce web application",
      "Created UI/UX wireframes and mockups in Figma",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Figma",
    ],
    certificateUrl: "/certificates/inamigos-certificate.pdf",
    color: "cyan",
  },
  {
    id: 2,
    role: "Summer Entrepreneurship Intern – Web Design",
    company: "Edulogy Institute",
    duration: "Mar 2026 – Apr 2026",
    emoji: "🎨",
    description:
      "Completed a 6-week online web design program focused on HTML, CSS, and JavaScript. Built multiple frontend projects and received Grade A++ for overall performance.",
    highlights: [
      "Completed 6-week Web Design program with Grade A++",
      "Built a responsive personal portfolio website",
      "Developed an interactive product landing page",
      "Created DOM projects including to-do list and image slider",
    ],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Flexbox",
      "CSS Grid",
      "DOM",
    ],
    certificateUrl: "/certificates/edulogy-certificate.pdf",
    color: "purple",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-wrapper">

        {/* Section title */}
        <h2 className="experience__title">
          Experience
        </h2>

        {/* Experience cards */}
        <div className="experience__grid">

          {EXPERIENCES.map((experience) => (
            <article
              key={experience.id}
              className={`experience__card experience__card--${experience.color}`}
            >

              {/* Card header */}
              <div className="experience__card-header">

                <span
                  className="experience__card-emoji"
                  aria-hidden="true"
                >
                  {experience.emoji}
                </span>

                <div className="experience__card-heading">
                  <h3 className="experience__card-role">
                    {experience.role}
                  </h3>

                  <p className="experience__card-company">
                    {experience.company}
                  </p>
                </div>

              </div>

              {/* Duration */}
              <div className="experience__duration">
                {experience.duration}
              </div>

              {/* Description */}
              <p className="experience__card-desc">
                {experience.description}
              </p>

              {/* Highlights */}
              <ul className="experience__highlights">

                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="experience__highlight-item"
                  >
                    <span
                      className="experience__bullet"
                      aria-hidden="true"
                    >
                      ▹
                    </span>

                    {highlight}
                  </li>
                ))}

              </ul>

              {/* Technologies */}
              <div className="experience__stack">

                {experience.stack.map((tech) => (
                  <span
                    key={tech}
                    className="experience__tech"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Certificate */}
              <div className="experience__links">

                <a
                  href={experience.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience__link"
                >
                  📜 View Certificate
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;