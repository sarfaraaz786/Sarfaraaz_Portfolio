// // ===========================
// // contact.controller.js — Logic to send contact form email
// // ===========================

// const nodemailer = require("nodemailer");

// /**
//  * sendContactEmail
//  * Receives name, email, subject, message from the request body
//  * Sends an email to the portfolio owner using nodemailer
//  */
// const sendContactEmail = async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   // Basic validation — all fields are required
//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({
//       success: false,
//       message: "All fields are required.",
//     });
//   }

//   try {
//     // Create a transporter using Gmail SMTP
//     // Use an App Password (not your regular Gmail password)
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // it is not working on render
//       // host: "smtp.gmail.com", // that is why i added this 3 line host, port, secure
//       // port: 587,
//       // secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email content configuration
//     const mailOptions = {
//       from: `"${name}" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER, // Send to yourself
//       replyTo: email,             // So you can reply directly to the sender
//       subject: `[Portfolio Contact] ${subject}`,
//       html: `
//         <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
//           <h2 style="color: #00f5ff;">New Message from Portfolio</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <hr/>
//           <p><strong>Message:</strong></p>
//           <p>${message.replace(/\n/g, "<br/>")}</p>
//         </div>
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({
//       success: true,
//       message: "Message sent successfully! I'll get back to you soon.",
//     });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to send message. Please try again later.",
//     });
//   }
// };

// module.exports = { sendContactEmail };


// ===========================
// contact.controller.js — Logic to send contact form email
// ===========================


// Nodemailer is Not Working with Render
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * sendContactEmail
 * Receives name, email, subject, message from the request body
 * Sends an email to the portfolio owner using Resend
 */
const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      // For initial testing, use Resend's test sender
      from: "Portfolio <onboarding@resend.dev>",

      // Your email where you want to receive messages
      to: [process.env.EMAIL_USER],

      // Visitor's email
      replyTo: email,

      subject: `[Portfolio Contact] ${subject}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
        ">

          <h2 style="color: #00a8b5;">
            New Message from Portfolio
          </h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message.replace(/\n/g, "<br />")}
          </p>

        </div>
      `,
    });

    // Resend returned an error
    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send message.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });

  } catch (error) {
    console.error("Email send error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
};

module.exports = { sendContactEmail };