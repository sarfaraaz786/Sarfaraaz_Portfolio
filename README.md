# Md Sarfaraaz — Portfolio

Full-stack MERN portfolio with neon UI, typing animation, contact form, and resume download.

---

## Project Structure

```
portfolio/
├── .gitignore               ← ignores node_modules for both
├── frontend/                ← React + Vite + SCSS
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── components/      ← Navbar, Hero, About, Skills, Projects, Contact, Footer, CursorGlow
│       ├── styles/          ← _variables.scss, _mixins.scss, global.scss
│       ├── App.jsx
│       └── main.jsx
└── backend/                 ← Node.js + Express
    ├── package.json
    ├── .env.example
    └── src/
        ├── server.js
        ├── routes/          ← contact.routes.js, resume.routes.js
        ├── controllers/     ← contact.controller.js
        └── assets/          ← Place Sarfaraaz_Resume.pdf here
```

---

## Setup

### 1. Backend

```bash
cd backend
npm install

# Create .env from example
cp .env.example .env
# Then fill in EMAIL_USER, EMAIL_PASS, CLIENT_URL

# Place your resume PDF in:
# backend/src/assets/Sarfaraaz_Resume.pdf

npm run dev     # development (nodemon auto-reload)
npm start       # production (node)
```

### 2. Frontend

```bash
cd frontend
npm install

npm run dev     # development on http://localhost:5173
npm start       # production preview
npm run build   # build for deployment
```

> API calls from the frontend are proxied to `localhost:5000` via Vite's proxy config — no CORS issues in dev.

---

## Deployment

- **Frontend** → Vercel (connect GitHub repo, set root as `frontend/`)
- **Backend** → Render (connect GitHub repo, set root as `backend/`, build cmd `npm install`, start cmd `npm start`)
- Update `CLIENT_URL` in backend `.env` to your Vercel URL
- Update the Vite proxy target if using a different backend URL

---

## Contact Form Setup (Gmail)

1. Enable 2FA on your Gmail account
2. Go to Google Account → Security → App Passwords
3. Generate an App Password for "Mail"
4. Use that as `EMAIL_PASS` in your `.env`

---

## Customization

- Update project live URLs in `frontend/src/components/Projects.jsx`
- Update LinkedIn/GitHub URLs in `Hero.jsx`, `Contact.jsx`, `Footer.jsx`
- Replace resume PDF at `backend/src/assets/Sarfaraaz_Resume.pdf`
