// ===========================
// main.jsx — React app entry point
// ===========================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Global SCSS — imports all base styles, variables, and resets
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
