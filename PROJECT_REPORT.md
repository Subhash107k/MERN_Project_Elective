# 📄 Comprehensive Project Engineering Report

---

## 1. Introduction
This project represents a complete architectural overhaul of an educational MERN stack learning codebase. The refactored repository transforms fragmented code snippets into a unified, beginner-friendly 15-day / 45-hour development edition.

## 2. Problem Statement
The original repository suffered from structural duplication (multiple disjointed `Backend/` and `Frontend/` directories), syntax errors (missing imports, invalid React tags), security risks (plaintext passwords, hardcoded credentials), and unhandled asynchronous errors.

## 3. Project Objectives
* Consolidate duplicate projects into a single backend API and frontend SPA.
* Fix 100% of confirmed syntax, routing, and schema bugs.
* Implement production-standard security (bcrypt password hashing, JWT stateless authentication).
* Create a complete 15-day progressive learning curriculum.

## 4. Target Users
* Computer Science / Engineering Students learning modern full-stack development.
* Educators and instructors delivering structured 45-hour MERN stack courses.
* Junior developers seeking a clean template reference for MERN CRUD apps.

## 5. Technology Stack
* **Runtime:** Node.js (v18+)
* **Backend Framework:** Express.js (v5.2)
* **Database & ODM:** MongoDB & Mongoose (v9.6)
* **Frontend Framework:** React (v18.3) + Vite (v6.0)
* **Client Router:** React Router DOM (v6.28)
* **HTTP Client:** Axios (v1.7)
* **Security & Auth:** bcryptjs (v3.0) & jsonwebtoken (v9.0)

## 6. System Architecture
The application follows the classic Model-View-Controller (MVC) decoupled web architecture:
```text
React SPA (Frontend) ──> Axios HTTP ──> Express Router ──> Controllers ──> Mongoose Models ──> MongoDB
```

## 7. Folder Structure
The repository uses a clear top-level separation:
* `backend/`: Server-side code, configuration, models, controllers, middleware.
* `frontend/`: Single-page application assets, pages, components, services, routes.
* `docs/`: 15 progressive daily learning markdown guides.
* `tests/`: Automated unit and integration test runners.

## 8. Frontend Architecture
The frontend is structured around reusable UI components (`Navbar`, `Button`, `Input`, `Table`, `Card`) managed by React Router v6. Global session state is maintained by `AuthContext.jsx`.

## 9. Backend Architecture
The backend uses Express 5 with modular route mounting (`/api/auth`, `/api/users`, `/api/products`, `/api/schools`). Controllers are wrapped in `asyncHandler` to forward errors to a centralized `errorHandler` middleware.

## 10. Database Architecture
MongoDB document collections (`users`, `products`, `schools`) are defined using Mongoose schemas. Schema definitions enforce data types, required constraints, email formatting, and unique key indexes.

## 11. API Architecture
RESTful endpoints adhere to standard HTTP semantics:
* `GET`: Query resources
* `POST`: Insert resources / execute login
* `PATCH`: Update resource fields
* `DELETE`: Remove resources

## 12. Authentication & Authorization
User authentication uses stateless JSON Web Tokens (JWT). Passwords are encrypted before storage using `bcryptjs` with salt factor 10. The `protect` middleware verifies JWT Bearer tokens on protected endpoints.

## 13. Validation
Input validation operates at two layers:
* Client-side HTML5 & controlled form state validation.
* Server-side `validateBody` middleware checking required payload properties.

## 14. Error Handling
All errors (validation errors, 404 not found, invalid ObjectIds, duplicate key errors) are intercepted by `errorHandler.js` and returned as formatted JSON objects with matching HTTP status codes.

## 15. Security Controls
* Password encryption via `bcryptjs`.
* CORS restrictions configured via environment variables.
* Environment variables managed through `.env` files (excluded from git tracking).

## 16. Testing Strategy
Automated Node test scripts (`tests/backend/api.test.js` and `tests/frontend/components.test.js`) verify response helper formatting, async handler wrappers, and session parsers.

## 17. Deployment Considerations
* **Backend:** Easily deployable to hosting platforms (Render, Railway, Heroku).
* **Frontend:** Static asset bundling via `npm run build` for distribution on CDNs (Vercel, Netlify).

## 18. Limitations
* Storage is limited to local/cloud MongoDB database instances.
* File attachment storage (e.g. image uploads) is out of current scope and can be added via Multer/Cloudinary.

## 19. Future Improvements
* Add image file uploads via Multer and Cloudinary.
* Add email notification verification using Nodemailer.
* Add pagination and search filter query parameters for large collection lists.

## 20. Conclusion
The refactored MERN stack project provides an exemplary, fully functional, secure, and beginner-friendly codebase suitable for academic instruction and real-world learning.
