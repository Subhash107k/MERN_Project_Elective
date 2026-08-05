# MERN Project Elective

College-elective MERN-stack demo and frontend exercises. This repository contains multiple small frontend projects and a Node/Express backend used for learning and experimentation.

## Contents

- `Backend/` — Node + Express API, Mongoose schemas
- `MERN/` — consolidated MERN examples and alternate frontends
- `Frontend/` — smaller frontend experiments (Vite + React)
- `day1/`, `MERN/day1/` — JavaScript practice files

## Quick links

-- Backend entry: `Backend/index.js`
-- MERN backend: `MERN/Backend/index.js`
-- Main React app (example): `MERN/react/vite-project`
-- Alternate React app: `MERN/react2/vite-project`
-- Frontend examples: `Frontend/frontend-day2`, `Frontend/frontend-rect_2`

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick start — Backend](#quick-start-—-backend)
- [Quick start — Frontends](#quick-start-—-frontends)
- [Project status & notes](#project-status--notes)
- [Structure (high level)](#structure-high-level)
- [How to contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)
- Subproject READMEs:
  - [Backend](Backend/README.md)
  - [MERN (overview)](MERN/README.md)
  - [MERN Backend](MERN/Backend/README.md)
  - [MERN React app](MERN/react/vite-project/README.md)
  - [MERN React2 app](MERN/react2/vite-project/README.md)
  - [MERN day1 exercises](MERN/day1/README.md)
  - [Frontend day2](Frontend/frontend-day2/README.md)
  - [Frontend rect_2](Frontend/frontend-rect_2/README.md)

---

## Run — Full repo (example)

Start the root backend and an example frontend in separate terminals:

```bash
# Terminal 1: start root backend
cd Backend
npm install
npm start

# Terminal 2: start example frontend (Vite)
cd MERN/react/vite-project
npm install
npm run dev
```

If you prefer the MERN example backend instead, use `cd MERN/Backend` for the backend commands.

---

## Prerequisites

- Node.js (16+ recommended)
- npm or yarn
- MongoDB (local or remote)

---

## Quick start — Backend

1. Open a terminal and install dependencies:

```bash
cd Backend
npm install
```

2. Configure environment (create `.env` with at least `MONGODB_URI` and `PORT` if used).

3. Start the server:

```bash
npm start
# or
node index.js
```

Notes: the backend uses Mongoose; default connection is `mongodb://localhost:27017` in examples.

---

## Quick start — Frontends

For each frontend folder (example: `MERN/react/vite-project`):

```bash
cd MERN/react/vite-project
npm install
npm run dev
```

Replace the path above with `MERN/react2/vite-project`, `Frontend/frontend-day2`, or `Frontend/frontend-rect_2` as needed.

---

## Project status & notes

- Core backend routes and `User` CRUD are implemented. Product CRUD and additional validation are pending.
- Recommended next steps: implement product APIs, add validation middleware, and secure authentication (bcrypt + JWT).

---

## Structure (high level)

```text
Backend/
  index.js
  src/
    routes/
    controller/
    schema/
MERN/
  Backend/
  react/
  react2/
  day1/
Frontend/
  frontend-day2/
  frontend-rect_2/
```

---

## How to contribute

- Open an issue describing the change or feature.
- Create a branch, implement changes, and open a pull request.

If you want me to generate or update subfolder `README.md` files from this consolidated content, say which folders to target and I will create them.

---

## License

This project is for educational and learning purposes.

---

## Contact

Author: [Subhash](https://github.com/subhash107k)

---

## Root README (original)

### 🚀 Day 1 – Project Setup

- Initialized backend project
- Installed dependencies:
  - express
  - mongoose
  - cors
  - dotenv
  - nodemon

- Created `index.js` (server entry point)
- Configured Express JSON parsing
- Connected MongoDB (`mongodb://localhost:27017`)
- Built initial routing experiments in `fristRoutes.js`

---

### 🧩 Day 2 – Schema & Routes

- Created Mongoose schemas:
  - `userSchema`
  - `productSchema`

- User schema fields:
  - name, email, password, address, phone

- Product schema fields:
  - name, price, quantity, description (optional)

- Created REST API route scaffolds:
  - `userRoutes.js`
  - `productRoutes.js`

---

### 🔗 Day 3 – Route Integration

- Mounted `/user` routes in `index.js`
- Verified server startup and MongoDB connection
- Confirmed route scaffolding works
- Tested API endpoints using Postman

---

### ⚡ Day 4 – User CRUD Implementation

- Connected `User` model with route handlers
- Implemented Create User API (`POST /user`)
- Implemented Get All Users API (`GET /user`)
- Implemented Get User By ID API (`GET /user/:id`)
- Implemented Update User API (`PATCH /user/:id`)
- Implemented Delete User API (`DELETE /user/:id`)
- Added async/await based database operations
- Added basic try-catch error handling
- Tested CRUD operations successfully using Postman

---

## 📁 Project Structure

```text
Backend/
│
├── index.js                          # Main Express server entry point
├── src/
│   ├── routes/
│   │   ├── fristRoutes.js            # Basic route experiments (root & dynamic routes)
│   │   ├── userRoutes.js             # User REST API routes
│   │   ├── productRoutes.js          # Product REST API routes
│   │
│   ├── schema/
│   │   ├── userSchema.js             # Mongoose schema for users
│   │   ├── productSchema.js          # Mongoose schema for products
```

## 📌 Current Status

- ✅ Express server is running
- ✅ MongoDB connection established
- ✅ User schema integrated with MongoDB
- ✅ User CRUD operations implemented
- ✅ User routes mounted at `/user`
- ✅ API testing completed with Postman
- ⚠️ Product CRUD operations pending
- ⚠️ Validation middleware not implemented
- ⚠️ Environment variables not fully configured

---

## 🚧 Next Steps

- Implement Product CRUD operations
- Mount `productRoutes` in `index.js`
- Add request validation using Mongoose validators
- Move MongoDB URI and server port into `.env`
- Add centralized error handling middleware
- Improve API response structure
- Add password hashing with bcrypt
- Implement JWT Authentication
- Create React frontend and connect APIs

---

## 🧪 Future Enhancements

- JWT Authentication
- Refresh Token System
- Password Hashing (bcrypt)
- Role-Based Access Control (RBAC)
- API Documentation (Swagger/OpenAPI)
- Centralized Logging
- Input Validation Middleware
- Docker Support
- Deployment (Render / Railway / VPS)
- Unit & Integration Testing
- CI/CD Pipeline

## 👨‍💻 Author

**Subhash**
MERN Stack Developer
GitHub: [Subhash](https://github.com/subhash107k)

---

## 📌 License

This project is for educational and learning purposes.

---

## MERN/README.md

# MERN Project Elective

Small MERN-stack demo project used for college elective exercises.

## Structure

- `Backend/` - Node/Express backend
- `react/vite-project/` - Frontend (Vite + React)
- `react2/vite-project/` - Alternate frontend
- `day1/` - JavaScript practice files

## Quick start

Backend:

```bash
cd Backend
npm install
npm start # or: node index.js
```

Frontend (example):

```bash
cd react/vite-project
npm install
npm run dev
```

## Notes

- See each folder's README for details.

---

## MERN/Backend/README.md

# Backend

Node/Express backend for the MERN Project Elective.

## Run

Install dependencies and start the server:

```bash
cd Backend
npm install
npm start
```

If `npm start` is not defined, run `node index.js` or the appropriate entry in `package.json`.

## Structure

- `index.js` - main server entry
- `src/` - controllers, routes, schemas

---

## MERN/react/vite-project/README.md

# Frontend (react/vite-project)

Vite + React frontend.

## Run

```bash
cd react/vite-project
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

---

## MERN/react2/vite-project/README.md

# Frontend (react2/vite-project)

Alternate Vite + React frontend.

## Run

```bash
cd react2/vite-project
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## MERN/day1/README.md

# day1 Exercises

Collection of JavaScript practice files used during early lessons.

## Files

- `9.mjs`, `day1.mjs`, `function.mjs`, `fungen.mjs`, `gen.mjs`, `info.mjs`, `n4ction.mjs`, `obj.mjs`, `test.mjs`

## Run

Run individual `.mjs` files with Node.js:

```bash
node --experimental-modules day1.mjs
```

---

## Frontend/frontend-day2/README.md

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

---

## Frontend/frontend-rect_2/README.md

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
