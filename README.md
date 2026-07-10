# AI Resume Builder App

An **AI-powered Resume Builder web application** that helps users create, edit, and manage professional resumes with modern templates, AI assistance, and live project links — all in one place.

---

## Features

*  **AI-assisted resume enhancement**
*  Create, edit, and delete resumes
*  Upload existing resume (PDF → text)
*  Multiple professional resume templates
*  Add **Live Demo** and **Source Code** links to projects
*  Fully responsive UI
*  JWT-based authentication
*  Image upload support (ImageKit)
*  Resume-ready layout for export/print

---

##  Tech Stack

### Frontend (`client/`)

* React (Vite)
* Tailwind CSS
* Redux Toolkit
* React Router
* Axios
* Lucide Icons

### Backend (`server/`)

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* OpenAI API
* ImageKit
* Multer
* bcrypt

---

## 📁 Project Structure

```
AI-Resume-Builder-App/
│
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   ├── .env.example
│   └── README.md
│
├── server/                 # Backend (Node + Express)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── configs/
│   ├── .env.example
│   └── server.js
│
├── CONTRIBUTING.md
├── LICENSE.md
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/laxman-goud/AI-Resume-Builder-App.git
cd AI-Resume-Builder-App
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` using `.env.example`:

Run server:

```bash
npm run server
```

---

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
```

Create `.env` using `.env.example`:


Run frontend:

```bash
npm run dev
```

---

##  Resume Templates Included

* Classic Template
* Modern Template
* Minimal Template
* Minimal Image Template

Each template supports:

* Projects
* Skills
* Education
* Experience
* **Clickable project links**

---

## 🔗 Project Links Feature

Each project can include:

* ✅ Source Code (GitHub)
* ✅ Live Demo URL

Links automatically:

* Open in new tab
* Handle URLs with or without `https://`

---

## Environment Files

Both frontend and backend include:

```
.env.example
```

Use them as reference — **do not commit `.env` files**.

---

## 🤝 Contributing

Contributions are welcome!

Please read:

* [`CONTRIBUTING.md`](./CONTRIBUTING.md)

---

## 📄 License

This project is licensed under the **MIT License**.
See [`LICENSE.md`](./LICENSE.md) for details.

---

## Author

**Laxman Goud**
GitHub: [@laxman-goud](https://github.com/laxman-goud)

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!

---

