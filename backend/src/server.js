// ===========================
// server.js — Entry point for Express backend
// ===========================

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const contactRoutes = require("./routes/contact.routes");
const resumeRoutes = require("./routes/resume.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// ===========================
// Middleware
// ===========================

// Allow requests from the frontend (CORS)
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

// Parse incoming JSON bodies
app.use(express.json());

// ===========================
// Routes
// ===========================

// Health check — confirms server is alive
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio backend is running 🚀" });
});

// Contact form submission route
app.use("/api/contact", contactRoutes);

// Resume download route
app.use("/api/resume", resumeRoutes);

// ===========================
// Start Server
// ===========================
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
