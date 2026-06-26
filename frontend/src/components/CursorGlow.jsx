// ===========================
// CursorGlow.jsx
// Renders a glowing orb that follows the mouse cursor
// Creates a reactive neon ambient light effect
// ===========================

import React, { useEffect, useRef } from "react";
import "./CursorGlow.scss";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    // Update the glow position on every mouse move
    const handleMouseMove = (e) => {
      if (!glow) return;
      // Offset by half the element's size to center it on the cursor
      glow.style.left = `${e.clientX - 150}px`;
      glow.style.top  = `${e.clientY - 150}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="cursor-glow" ref={glowRef} aria-hidden="true" />;
}

export default CursorGlow;
