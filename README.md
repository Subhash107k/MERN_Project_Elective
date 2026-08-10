# 🎓 MERN Project Elective — 18-Day Class & Project Documentation

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)](https://mongodb.com)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express-v5.2-black.svg)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_v9-green.svg)](https://mongoosejs.com)
[![React](https://img.shields.io/badge/React-v18.3-cyan.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-v6.0-purple.svg)](https://vitejs.dev)
[![Tests Passing](https://img.shields.io/badge/Tests-100%25_Passing-brightgreen.svg)](#-running-automated-test-suites)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This repository documents the concepts, technologies, implementation work, practical exercises, API testing, database modeling, and application progress completed during 18 days of MERN stack class and project development (approximate total work duration: 45 hours).

---

## 📌 Table of Contents
* [✨ Core Project Features](#-core-project-features)
* [🏗️ System & Data Architecture](#️-system--data-architecture)
* [📁 Repository Directory Hierarchy](#-repository-directory-hierarchy)
* [🚀 Quick Start & Installation Guide](#-quick-start--installation-guide)
* [🗓️ 18-Day Class & Project Progression](#️-18-day-class--project-progression)
* [📡 REST API & Postman Testing Reference](#-rest-api--postman-testing-reference)
* [🔒 Security & Validation Controls](#-security--validation-controls)
* [🧪 Running Automated Test Suites](#-running-automated-test-suites)
* [📄 Documentation Index](#-documentation-index)
* [👨‍💻 Author & License](#-author--license)

---

## ✨ Core Project Features

### 🔌 Backend REST API (`backend/`)
* **Express 5 & Node.js:** High-performance RESTful API router architecture with modular endpoints.
* **Mongoose Schema Layer (`schemas/`):** Strict data types, email regex validators, and index optimizations.
* **Stateless JWT Authentication:** Secure login/registration issuing 7-day JSON Web Tokens.
* **Cryptographic Password Hashing:** 10-round salted password encryption using `bcryptjs`.
* **Centralized Error Middleware:** 4-parameter error handler intercepting invalid ObjectIds, duplicate key collisions (`11000`), and schema validation failures.

### 🖥️ Frontend SPA (`frontend/`)
* **React 18 & Vite 6:** Modern functional components, JSX, and instant Hot Module Replacement (HMR).
* **React Router DOM v6:** SPA client-side routing with active link indicators.
* **Global `AuthContext`:** Context API provider managing authentication state and `localStorage` persistence.
* **Axios Service Layer:** Centralized API client with dynamic base URL configuration and JWT header interceptors.
* **Vanilla CSS System:** Responsive design system with custom cards, forms, tables, buttons, and alert banners.

---

## 🏗️ System & Data Architecture

```text
+-----------------------------------------------------------------------------------+
|                                 React SPA (Frontend)                              |
|   Components ──> AuthContext ──> Axios Service Layer (services/api.js)            |
+----------------------------------------│------------------------------------------+
                                         │ Asynchronous HTTP Requests
                                         ▼
+-----------------------------------------------------------------------------------+
|                               Express API (Backend)                               |
|   Server ──> CORS & Body Parsers ──> Express Routers ──> Controllers              |
|                                        │                                          |
|                                 Mongoose Models                                   |
|                                        │                                          |
|                                Mongoose Schemas                                   |
+----------------------------------------│------------------------------------------+
                                         │ BSON Document Operations
                                         ▼
+-----------------------------------------------------------------------------------+
|                                 MongoDB Database                                  |
|                 Collections: `users`, `products`, `schools`                       |
+-----------------------------------------------------------------------------------+
```

---

## 📁 Repository Directory Hierarchy

```text
MERN_Project_Elective/
├── README.md                           # Master documentation
├── COURSE_PLAN.md                      # 18-Day class & project schedule
├── PROJECT_REPORT.md                   # 20-section comprehensive engineering report
├── ERROR_REPORT.md                     # Error audit log & refactoring documentation
├── API_DOCUMENTATION.md                # Full REST API endpoint specification
├── DATABASE_DOCUMENTATION.md           # Mongoose schemas, ERD & NID upsert workflow
├── SECURITY_REPORT.md                  # Security risk matrix & OWASP mitigation notes
├── SETUP_GUIDE.md                      # Step-by-step local installation & Postman guide
├── MIGRATION_GUIDE.md                  # Refactoring & directory consolidation log
├── CHANGELOG.md                        # Version release history
├── CONTRIBUTING.md                     # Guidelines for open-source contributions
├── .gitignore                          # Environment & dependency ignores
│
├── .github/                            # CI/CD Workflows
│   └── workflows/ci.yml                # GitHub Actions automated test & build pipeline
│
├── backend/                            # Express 5 REST API
│   ├── package.json
│   ├── .env.example
│   ├── .env
│   └── src/
│       ├── server.js                   # Server entry point
│       ├── config/database.js          # Mongoose DB connection module
│       ├── schemas/                    # Mongoose Schema definitions
│       │   ├── userSchema.js           # User schema, validators & bcrypt hooks
│       │   ├── productSchema.js        # Product schema & catalog indexes
│       │   └── schoolSchema.js         # School institution schema
│       ├── models/                     # Compiled Mongoose Models
│       │   ├── User.js                 # User model compiled from userSchema
│       │   ├── Product.js              # Product model compiled from productSchema
│       │   └── School.js               # School model compiled from schoolSchema
│       ├── controllers/                # Auth, User, Product, School controllers
│       ├── routes/                     # Express Router modules
│       ├── middleware/                 # Auth, Error, Validation middleware
│       └── utils/                      # Async wrapper & Response helpers
│
├── frontend/                           # Vite + React 18 SPA
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
├── docs/                               # 18-Day Daily Class Material & Guides
│   ├── installation.md                 # Complete installation & setup guide
│   ├── architecture.md                 # System architecture & data flow guide
│   ├── database.md                     # Database schema & ERD guide
│   ├── api-testing.md                  # REST API & Postman/Thunder Client testing guide
│   ├── testing.md                      # Automated & manual testing strategy guide
│   ├── troubleshooting.md              # Troubleshooting & resolution guide
│   ├── day-01.md                       # HTML5 Fundamentals, Web & Node Setup
│   ├── day-02.md                       # Express Server & HTTP Basics
│   ├── day-03.md                       # Express Routing & Parameters
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
│   ├── day-16.md                       # Advanced File Uploads & Cloud [Extension]
│   ├── day-17.md                       # Real-Time WebSockets [Extension]
│   └── day-18.md                       # Performance Optimization & CI/CD [Extension]
│
└── tests/                              # Automated Test Suite
    ├── backend/api.test.js             # Backend API & Helper tests
    └── frontend/components.test.js     # Frontend component & state tests
```

---

## 🚀 Quick Start & Installation Guide

### 1. Clone & Install Backend
```bash
# Clone the repository
git clone https://github.com/Subhash107k/MERN_Project_Elective.git
cd MERN_Project_Elective

# Setup Backend
cd backend
npm install
cp .env.example .env
npm run dev
```
* Backend API listens on `http://localhost:8000`.

### 2. Setup & Launch Frontend
Open a new terminal window:
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
* Frontend React SPA opens on `http://localhost:5173`.

For complete installation steps, refer to the [Installation Guide](./docs/installation.md).

---

## 🗓️ 18-Day Class & Project Progression

| Day | Topic | Implementation Completed | Daily Guide File |
| :---: | :--- | :--- | :--- |
| **01** | HTML5 & Node Setup | HTML5 forms & Node.js ESM scripts | [`docs/day-01.md`](./docs/day-01.md) |
| **02** | Express HTTP Server | Express server listening on port 8000 | [`docs/day-02.md`](./docs/day-02.md) |
| **03** | Express Routing | Dynamic parameter & query extraction | [`docs/day-03.md`](./docs/day-03.md) |
| **04** | MongoDB & Mongoose | Mongoose schemas & MongoDB connection | [`docs/day-04.md`](./docs/day-04.md) |
| **05** | REST API & CRUD | Full User RESTful CRUD API endpoints | [`docs/day-05.md`](./docs/day-05.md) |
| **06** | MVC Architecture | Centralized Express error middleware | [`docs/day-06.md`](./docs/day-06.md) |
| **07** | React & Vite Setup | Interactive Vite + React SPA | [`docs/day-07.md`](./docs/day-07.md) |
| **08** | React Router v6 | Multi-page client SPA navigation | [`docs/day-08.md`](./docs/day-08.md) |
| **09** | Controlled React Forms | Validated controlled form state | [`docs/day-09.md`](./docs/day-09.md) |
| **10** | Axios API Integration | React form data saved to MongoDB | [`docs/day-10.md`](./docs/day-10.md) |
| **11** | List Rendering | Database list tables with delete triggers | [`docs/day-11.md`](./docs/day-11.md) |
| **12** | Password Security | `bcryptjs` encrypted password storage | [`docs/day-12.md`](./docs/day-12.md) |
| **13** | JWT Authentication | Protected API routes & AuthContext | [`docs/day-13.md`](./docs/day-13.md) |
| **14** | Validation & Testing | Automated test suite execution | [`docs/day-14.md`](./docs/day-14.md) |
| **15** | Production Build | Optimized frontend bundle build | [`docs/day-15.md`](./docs/day-15.md) |
| **16** | File Uploads & Cloud [Ext] | Multer binary uploads & URL storage | [`docs/day-16.md`](./docs/day-16.md) |
| **17** | Real-Time WebSockets [Ext] | Socket.io real-time event broadcasting | [`docs/day-17.md`](./docs/day-17.md) |
| **18** | Performance & CI/CD [Ext] | React Code-splitting & GitHub CI pipeline | [`docs/day-18.md`](./docs/day-18.md) |

---

## 📡 REST API & Postman Testing Reference

For detailed API payload specifications and Postman/Thunder Client copy-paste JSON snippets, refer to the [API Testing Guide](./docs/api-testing.md).

---

## 🔒 Security & Validation Controls

* **Password Hashing:** `bcryptjs` pre-save middleware hook executing 10 salt rounds before saving to MongoDB.
* **Stateless Authorization:** Signed JSON Web Tokens (JWT) verified in `protect` bearer middleware.
* **Schema Validation:** Strict Mongoose schemas enforcing non-empty strings, minimum lengths, email regular expressions, and unique key indexes.
* **Environment Protection:** Sensitive environment variables managed in `.env` files (excluded from Git).

---

## 🧪 Running Automated Test Suites

Run backend integration and helper unit assertions:
```bash
cd backend
npm test
```

Run frontend API configuration and session parser assertions:
```bash
cd frontend
npm test
```

For complete testing details, refer to the [Testing Guide](./docs/testing.md).

---

## 📄 Documentation Index

* [`installation.md`](./docs/installation.md) — Complete Installation & Setup Guide
* [`architecture.md`](./docs/architecture.md) — System Architecture & Component Interaction Guide
* [`database.md`](./docs/database.md) — Database Schemas, ERD & NID Upsert Strategy
* [`api-testing.md`](./docs/api-testing.md) — Complete REST API Specification & Postman Payload Guide
* [`testing.md`](./docs/testing.md) — Automated & Manual Testing Strategy Guide
* [`troubleshooting.md`](./docs/troubleshooting.md) — Troubleshooting & Common Error Resolutions
* [`COURSE_PLAN.md`](./COURSE_PLAN.md) — 18-Day Master Class & Project Progression
* [`PROJECT_REPORT.md`](./PROJECT_REPORT.md) — 20-Section Comprehensive Engineering Report

---

## 👨‍💻 Author & License

* **Author:** Subhash ([@Subhash107k](https://github.com/Subhash107k))
* **License:** [MIT License](LICENSE)
