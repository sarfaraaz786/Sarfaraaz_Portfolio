// ===========================
// resume.routes.js — Serves the resume PDF for download
// ===========================

const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

/**
 * GET /api/resume/download
 * Streams the resume PDF to the client as a downloadable file
 * Place your actual resume PDF at: backend/src/assets/Sarfaraaz_Resume.pdf
 */
router.get("/download", (req, res) => {
  // Path to the stored resume file
  const resumePath = path.join(__dirname, "../assets/Sarfaraaz_Resume.pdf");

  // Check if the file actually exists before trying to send
  if (!fs.existsSync(resumePath)) {
    return res.status(404).json({
      success: false,
      message: "Resume file not found. Please upload it to backend/src/assets/",
    });
  }

  // Set headers to trigger browser download
  res.setHeader("Content-Disposition", "attachment; filename=Md_Sarfaraaz_Resume.pdf");
  res.setHeader("Content-Type", "application/pdf");

  // Stream the file to the response
  const fileStream = fs.createReadStream(resumePath);
  fileStream.pipe(res);
});

module.exports = router;
