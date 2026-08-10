# 🎓 18-Day / 45-Hour MERN Stack Development Course Edition

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)](https://mongodb.com)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-v5-black.svg)](https://expressjs.com)
[![React](https://img.shields.io/badge/React-v18-cyan.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-v6-purple.svg)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A complete, clean, beginner-friendly, production-ready full-stack MERN (MongoDB, Express.js, React, Node.js) educational repository designed for an expanded **18-Day / 45-Hour (2.5 hours per day)** progressive development curriculum.

---

## 📌 Project Overview

This repository features:
* **Backend API (`backend/`):** Express 5 REST server with MVC architecture, Mongoose schemas, JWT authentication, `bcryptjs` password hashing, input validation, and centralized error handling.
* **Frontend SPA (`frontend/`):** Vite + React 18 single-page application with React Router v6 navigation, global `AuthContext`, Axios service layer, and responsive Vanilla CSS components.
* **18-Day Curriculum (`docs/`):** 18 comprehensive daily learning modules starting from HTML5 fundamentals and Node.js to WebSockets, image uploads, code-splitting, and CI/CD pipelines.
* **DevOps & CI/CD (`.github/`):** GitHub Actions automated CI testing workflow.
* **Automated Test Suite (`tests/`):** Node.js integration and unit test runners for backend APIs and frontend components.

---

## 🚀 Quick Start Guide

### Prerequisites
* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher
* **MongoDB:** Local MongoDB service (`mongodb://localhost:27017`) or MongoDB Atlas URI

### 1. Clone & Setup Repository
```bash
git clone https://github.com/Subhash107k/MERN_Project_Elective.git
cd MERN_Project_Elective
```

### 2. Backend Setup & Startup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
Backend API will start listening on `http://localhost:8000`.

### 3. Frontend Setup & Startup
Open a new terminal window:
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Frontend React app will open on `http://localhost:5173`.

---

## 📁 Repository Structure

```text
MERN_Project_Elective/
├── README.md                           # Master documentation
├── COURSE_PLAN.md                      # 18-Day / 45-Hour curriculum schedule
├── PROJECT_REPORT.md                   # Detailed system engineering report
├── ERROR_REPORT.md                     # Comprehensive error audit & fix breakdown
├── API_DOCUMENTATION.md                # Full REST API endpoint reference
├── DATABASE_DOCUMENTATION.md           # Mongoose database schemas & models
├── SECURITY_REPORT.md                  # Security audit & remediation matrix
├── SETUP_GUIDE.md                      # Detailed local installation & configuration guide
├── MIGRATION_GUIDE.md                  # Refactoring & directory consolidation log
├── CHANGELOG.md                        # Version release history
├── CONTRIBUTING.md                     # Guidelines for open-source contributions
├── .gitignore                          # Environment & dependency ignores
│
├── .github/                            # CI/CD Workflows
│   └── workflows/ci.yml                # GitHub Actions automated test & build pipeline
│
├── backend/                            # Clean Node.js / Express 5 API
│   ├── package.json
│   ├── .env.example
│   ├── .env
│   └── src/
│       ├── server.js                   # Server entry point
│       ├── config/database.js          # Mongoose DB connection
│       ├── models/                     # User, Product, School models
│       ├── controllers/                # Auth, User, Product, School controllers
│       ├── routes/                     # Router declarations
│       ├── middleware/                 # Auth, Error, Validation middleware
│       └── utils/                      # Async wrapper & Response helpers
│
├── frontend/                           # Modern Vite + React 18 SPA
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── .env.example
│   ├── .env
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── components/                 # Navbar, Button, Input, Table, Card, Loading, Alerts
│       ├── pages/                      # Home, Auth, Users, Products, Schools pages
│       ├── services/api.js             # Centralized Axios API service layer
│       ├── context/AuthContext.jsx     # Global JWT authentication provider
│       ├── routes/AppRoutes.jsx        # React Router v6 navigation table
│       └── styles/index.css            # Vanilla CSS design system
│
├── docs/                               # 18-Day Daily Course Material
│   ├── day-01.md                       # HTML5 Fundamentals, Web & Node Setup
│   ├── day-02.md                       # Express Server & HTTP Basics
│   ├── day-03.md                       # Routing & Dynamic Parameters
│   ├── day-04.md                       # MongoDB & Mongoose Schemas
│   ├── day-05.md                       # REST API & CRUD Operations
│   ├── day-06.md                       # MVC Architecture & Error Middleware
│   ├── day-07.md                       # React & Vite Setup
│   ├── day-08.md                       # React Router v6 Client Routing
│   ├── day-09.md                       # Controlled React Forms & State
│   ├── day-10.md                       # Axios & Full-Stack Integration
│   ├── day-11.md                       # Fetching & Rendering Database Lists
│   ├── day-12.md                       # bcryptjs Password Hashing
│   ├── day-13.md                       # JWT & Protected Routes
│   ├── day-14.md                       # Validation, Security & Testing
│   ├── day-15.md                       # Full Integration & Production Build
│   ├── day-16.md                       # Advanced File Uploads & Cloud (Multer)
│   ├── day-17.md                       # Real-Time WebSockets (Socket.io)
│   └── day-18.md                       # Performance Optimization & CI/CD Pipelines
│
└── tests/                              # Automated Test Runners
    ├── backend/api.test.js             # Backend API & Helper tests
    └── frontend/components.test.js     # Frontend component & state tests
```

---

## 📅 18-Day / 45-Hour Course Schedule Summary

| Day | Topic | Feature Covered | Key Practical Deliverable |
| :---: | :--- | :--- | :--- |
| **1** | HTML & Node Setup | HTML5 Tags & Web Architecture | HTML5 form & Node setup ([`docs/day-01.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-01.md)) |
| **2** | Express Server | HTTP Listener Setup | Express server listening on port 8000 ([`docs/day-02.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-02.md)) |
| **3** | Express Routing | Dynamic Parameter Extraction | Router parameters & query endpoints ([`docs/day-03.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-03.md)) |
| **4** | Database ODM | Mongoose Schemas | MongoDB database connection & models ([`docs/day-04.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-04.md)) |
| **5** | RESTful APIs | User CRUD Operations | Full User REST API endpoints ([`docs/day-05.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-05.md)) |
| **6** | MVC Architecture | Controller Decoupling | Centralized error handling middleware ([`docs/day-06.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-06.md)) |
| **7** | React Starter | Vite React Environment | Functional Vite + React single-page app ([`docs/day-07.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-07.md)) |
| **8** | Client Routing | React Router v6 | Multi-page client SPA navigation ([`docs/day-08.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-08.md)) |
| **9** | React Forms | Controlled Form State | Interactive React form validation ([`docs/day-09.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-09.md)) |
| **10** | API Integration | Axios Service Layer | React form data posted to Express backend ([`docs/day-10.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-10.md)) |
| **11** | Data Display | List Rendering | Database list tables with delete triggers ([`docs/day-11.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-11.md)) |
| **12** | Security Setup | Password Hashing | `bcryptjs` encrypted password storage ([`docs/day-12.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-12.md)) |
| **13** | Authentication | JWT Bearer Tokens | Protected API routes & AuthContext ([`docs/day-13.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-13.md)) |
| **14** | Form Validation | Input Sanitization | Automated test suite execution ([`docs/day-14.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-14.md)) |
| **15** | Production | Build & Deployment | Final production bundle compilation ([`docs/day-15.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-15.md)) |
| **16** | File Uploads | Multer & Cloud Storage | Binary image uploads & URL storage ([`docs/day-16.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-16.md)) |
| **17** | WebSockets | Real-Time Events | Socket.io event broadcasting ([`docs/day-17.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-17.md)) |
| **18** | DevOps & CI/CD | Performance & GitHub Actions | Code-splitting & CI test pipeline ([`docs/day-18.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-18.md)) |

---

## 🧪 Running Automated Tests

Run backend tests:
```bash
cd backend
npm test
```

Run frontend tests:
```bash
cd frontend
npm test
```

---

## 👨‍💻 Author & License

* **Author:** Subhash ([@Subhash107k](https://github.com/Subhash107k))
* **License:** [MIT License](LICENSE)
