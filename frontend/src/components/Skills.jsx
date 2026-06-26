// ===========================
// Skills.jsx
// Shows tech stack organized by category with neon skill tags
// ===========================

import React from "react";
import "./Skills.scss";

// Skills organized into categories
// Level is used for the animated progress bar
const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: "⌨️",
    color: "cyan",
    skills: [
      { name: "JavaScript",  level: 90 },
      { name: "Java",        level: 75 },
      { name: "C / C++",     level: 70 },
      { name: "HTML5",       level: 95 },
      { name: "CSS3",        level: 90 },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "purple",
    skills: [
      { name: "React.js",       level: 88 },
      { name: "Tailwind CSS",   level: 85 },
      { name: "Bootstrap 5",    level: 80 },
      { name: "EJS",            level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "pink",
    skills: [
      { name: "Node.js",     level: 85 },
      { name: "Express.js",  level: 85 },
      { name: "REST APIs",   level: 88 },
      { name: "JWT Auth",    level: 82 },
    ],
  },
  {
    title: "Database & Tools",
    icon: "🗄️",
    color: "green",
    skills: [
      { name: "MongoDB",     level: 83 },
      { name: "Mongoose",    level: 80 },
      { name: "Git / GitHub",level: 88 },
      { name: "Postman",     level: 85 },
    ],
  },
];

// Additional tech badges shown as flat tags
const TECH_TAGS = [
  "Google Gemini AI", "Puppeteer", "pdf-parse", "Multer",
  "PrismJS", "Zod", "react-markdown", "Vercel", "Render",
  "VS Code", "MongoDB Atlas", "Data Structures", "OOP", "DBMS", "OS",
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-wrapper">

        <h2 className="skills__title">Tech Stack</h2>

        {/* Category cards */}
        <div className="skills__grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className={`skills__card skills__card--${cat.color}`}>

              {/* Card header */}
              <div className="skills__card-header">
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>

              {/* Skill bars */}
              <ul className="skills__list">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="skills__item">
                    <div className="skills__item-top">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-pct">{skill.level}%</span>
                    </div>
                    {/* Progress bar — width driven by CSS custom property */}
                    <div className="skills__bar-track">
                      <div
                        className="skills__bar-fill"
                        style={{ "--level": `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Flat tech badge row */}
        <div className="skills__tags-section">
          <p className="skills__tags-label">Also worked with</p>
          <div className="skills__tags">
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="skills__tag">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
