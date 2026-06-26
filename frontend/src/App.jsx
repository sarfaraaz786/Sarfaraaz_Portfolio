// ===========================
// App.jsx — Root component with routing
// ===========================

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

// Single-page portfolio — all sections on one page
function App() {
  return (
    <Router>
      {/* Neon cursor follow effect */}
      <CursorGlow />

      {/* Sticky navigation bar */}
      <Navbar />

      {/* Main content — all sections stack vertically */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
