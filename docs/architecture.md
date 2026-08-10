# 🏗️ System Architecture & Design Documentation

This document describes the high-level system design, data flow, component interactions, and architectural patterns of the MERN Stack application.

---

## 📐 System Architecture Diagram

The application implements a decoupled, event-driven Model-View-Controller (MVC) web architecture:

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

## 🏛️ Architectural Layers

### 1. Frontend SPA Layer (`frontend/`)
* **Framework:** React 18 built using Vite 6.
* **Navigation:** React Router DOM v6 (`AppRoutes.jsx`) managing client-side SPA route matching without browser reloads.
* **Global Authentication:** `AuthContext.jsx` holding user session state, JWT tokens, and managing `localStorage` persistence.
* **API Communication:** Centralized Axios instance (`services/api.js`) attaching Bearer token headers dynamically on requests.
* **UI Components:** Reusable Vanilla CSS components (`Navbar`, `Button`, `Input`, `Table`, `Card`, `Loading`, `ErrorMessage`, `SuccessMessage`).

### 2. Backend API Layer (`backend/`)
* **Framework:** Express.js v5 running on Node.js ES Modules (`"type": "module"`).
* **Route Layer (`src/routes/`):** Modular route handlers mounted at `/api/auth`, `/api/users`, `/api/products`, and `/api/schools`.
* **Controller Layer (`src/controllers/`):** Business logic processing request payloads, wrapped in `asyncHandler` to eliminate repetitive `try...catch` blocks.
* **Schema Layer (`src/schemas/`):** Pure Mongoose schema declarations defining validation rules, indexes, and password hashing hooks.
* **Model Layer (`src/models/`):** Compiled Mongoose models instantiated from schema objects.
* **Error Handling:** Centralized 4-parameter error middleware (`middleware/errorHandler.js`) catching all API exceptions.

### 3. Database Layer
* **ODM:** Mongoose v9 connecting to MongoDB via `config/database.js`.
* **Collections:** `users`, `products`, `schools`.

---

## 🔄 Data Request-Response Lifecycle

1. **User Action:** User fills out a form in React (e.g. `CreateUser.jsx`) and submits it.
2. **Form Submission:** `e.preventDefault()` halts browser page reload; local state is compiled into a JSON payload.
3. **Axios Call:** Component calls `createUserApi(data)` in `services/api.js`.
4. **HTTP Transport:** Axios sends an asynchronous `POST /api/users` request over HTTP.
5. **Express Receiver:** Express server receives request, passes through `cors()`, `express.json()`, and matches `/api/users` router.
6. **Controller Execution:** `userController.js` processes payload via Mongoose Model (`User.create()`).
7. **Database Persistence:** Mongoose validates data against `userSchema.js` and inserts document into MongoDB.
8. **Response Return:** Controller formats success response using `sendSuccess(res, 201, message, data)`.
9. **UI Update:** React receives response, updates state, and renders success feedback banner.
