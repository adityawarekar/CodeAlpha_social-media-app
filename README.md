# SocialHub - Social Media Platform 🚀

## Overview

SocialHub is a full-stack social media web application built using React.js, Node.js, Express.js, and MongoDB. Users can register, log in, create posts, like posts, add comments, view their profile, and monitor activity through a dashboard.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication

### Social Features

* Create Posts
* View Posts
* Like Posts
* Comment on Posts
* User Profile Page

### Dashboard

* Total Posts Analytics
* Total Likes Analytics
* Engagement Statistics
* Recent Activity Section

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

---

## Project Structure

```text
social-media-app/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <your-github-repository-url>
```

### Backend Setup

```bash
cd backend

npm install

npm start
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Posts

```http
GET /api/posts
POST /api/posts
PUT /api/posts/like/:id
```

### Comments

```http
POST /api/comments/:postId
GET /api/comments/:postId
```

---

## Future Improvements

* Follow System
* Image Uploads
* Dark Mode
* Real-Time Chat
* Notifications

---

## Author

Aditya Warekar

CodeAlpha Full Stack Development Internship Project
