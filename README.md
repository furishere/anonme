# AnonMe

AnonMe is a full-stack anonymous messaging platform where users can create their profile and receive anonymous messages from anyone through a unique shareable link.

Built with the MERN stack, it focuses on a clean UI, authentication, profile customization, and anonymous interaction.

## Features

- User Authentication
- Custom User Profiles
- Avatar and Bio Support
- Anonymous Messaging
- Shareable User Links
- Responsive Design

---

# Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Zod

---

# Installation

## Clone Repository

```bash
git clone https://github.com/furishere/anonme.git
cd anonme
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

# Author

Hariom

GitHub: https://github.com/furishere