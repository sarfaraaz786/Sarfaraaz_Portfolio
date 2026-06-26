// ===========================
// Projects.jsx
// Showcases the two featured projects from the resume
// Each card links to live demo + GitHub
// ===========================

import React from "react";
import "./Projects.scss";

const PROJECTS = [
  {
    id: 1,
    title: "Gen AI Interview Prep Platform",
    emoji: "🤖",
    description:
      "A full-stack AI-powered interview preparation platform. Upload your resume, enter a job description, and get personalized reports — including a job match score (0–100), technical & behavioral Q&A with interviewer intent, skill gap severity ratings, and a day-wise preparation roadmap.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "JWT", "Puppeteer", "pdf-parse"],
    highlights: [
      "JWT auth with secure token blacklisting",
      "Gemini AI + Zod schema for structured output",
      "Dynamic ATS-optimized PDF resume generator",
      "PDF parsing → context-aware AI prompts",
    ],
    liveUrl:   "https://gen-ai-job-preparation-web-applicat.vercel.app/",  // Replace with actual URL
    githubUrl: "https://github.com/sarfaraaz786/Gen-AI-Job-Preparation-Web-Application",
    color: "cyan",
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    emoji: "💻",
    description:
      "A full-stack AI-powered code review platform. Paste or type your code, and a Gemini-backed senior developer persona analyzes it for bugs, security vulnerabilities, performance issues, and best practice violations — rendered as formatted Markdown.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini 2.5 Flash", "JWT", "PrismJS", "react-markdown"],
    highlights: [
      "Syntax-highlighted in-browser code editor",
      "Senior-dev system prompt engineering",
      "Auth-gated review with return URL redirect",
      "Real-time Markdown AI feedback rendering",
    ],
    liveUrl:   "https://ai-code-reviewer-wine.vercel.app/",  // Replace with actual URL
    githubUrl: "https://github.com/sarfaraaz786/Ai-Code-Reviewer",
    color: "purple",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-wrapper">

        <h2 className="projects__title">Featured Projects</h2>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className={`projects__card projects__card--${project.color}`}>

              {/* Card header */}
              <div className="projects__card-header">
                <span className="projects__card-emoji">{project.emoji}</span>
                <h3 className="projects__card-title">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="projects__card-desc">{project.description}</p>

              {/* Key highlights list */}
              <ul className="projects__highlights">
                {project.highlights.map((h) => (
                  <li key={h} className="projects__highlight-item">
                    <span className="projects__bullet" aria-hidden="true">▹</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech stack chips */}
              <div className="projects__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="projects__tech">{tech}</span>
                ))}
              </div>

              {/* Footer links */}
              <div className="projects__links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link projects__link--live"
                >
                  🚀 Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link projects__link--github"
                >
                  ⬡ GitHub
                </a>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
