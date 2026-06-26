// ===========================
// contact.routes.js — Route definitions for contact form
// ===========================

const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const { sendContactEmail } = require("../controllers/contact.controller");

// Rate limiter — max 5 submissions per 15 minutes per IP
// Prevents spam from the contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    message: "Too many messages sent. Please try again after 15 minutes.",
  },
});

// POST /api/contact — handle form submission
router.post("/", contactLimiter, sendContactEmail);

module.exports = router;
