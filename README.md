# SocialHub - Social Media Platform

## Overview

SocialHub is a full-stack social media platform developed using React.js, Node.js, Express.js, and MongoDB. Users can register, log in securely, create posts, interact with posts through likes, and view platform analytics through a dashboard.

---

## Features

* User Registration
* User Login Authentication
* JWT Authentication
* Create Posts
* View Posts
* Like Posts
* Dashboard Analytics
* Protected Routes
* Responsive User Interface
* MongoDB Database Integration

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
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── api.js
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── public/
    └── package.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/adityawarekar/social-media-app.git
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
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

---

## Dashboard

The dashboard provides:

* Total Posts Count
* Total Likes Count
* Engagement Statistics
* Recent Activity Section
* Platform Information

---

## Screenshots

### Login Page

(Add Screenshot)

### Register Page

(Add Screenshot)

### Feed Page

(Add Screenshot)

### Dashboard Page

(Add Screenshot)

---

## Future Enhancements

* User Profiles
* Comments System
* Image Uploads
* Follow/Unfollow Users
* Dark Mode

---

## Author

Aditya Warekar

CodeAlpha Full Stack Development Internship Project
