// ===========================
// Contact.jsx
// Contact form that POSTs to the Express backend
// Shows success/error feedback inline
// ===========================

import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";

// Initial empty form state
const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [feedback,setFeedback]= useState(null); // { type: "success"|"error", message }

  // Generic field change handler
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (feedback) setFeedback(null); // Clear feedback on new input
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form);
      setFeedback({ type: "success", message: res.data.message });
      setForm(INITIAL_FORM); // Clear form on success
    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong. Please try again.";
      setFeedback({ type: "error", message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-wrapper">

        <h2 className="contact__title">Get In Touch</h2>

        <div className="contact__body">

          {/* Left — info panel */}
          <div className="contact__info">
            <p className="contact__info-lead">
              Have a project in mind, want to collaborate, or just want to say hi?
              <br />My inbox is open.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📧</span>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <a href="mailto:mdsarfaraaz86@gmail.com">mdsarfaraaz86@gmail.com</a>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📱</span>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <span>+91 9958914755</span>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span>Bihar, India</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="contact__socials">
              <a href="https://www.linkedin.com/in/md-sarfaraaz-b7b6b42a4/" target="_blank" rel="noopener noreferrer" className="contact__social">
                LinkedIn ↗
              </a>
              <a href="https://github.com/sarfaraaz786" target="_blank" rel="noopener noreferrer" className="contact__social">
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate>

            <div className="contact__row">
              {/* Name field */}
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email field */}
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Subject field */}
            <div className="contact__field">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="contact__input"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message textarea */}
            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Your message here..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Feedback message */}
            {feedback && (
              <p className={`contact__feedback contact__feedback--${feedback.type}`}>
                {feedback.type === "success" ? "✅" : "❌"} {feedback.message}
              </p>
            )}

            {/* Submit button */}
            <button type="submit" className="contact__submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="contact__spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                "Send Message →"
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
