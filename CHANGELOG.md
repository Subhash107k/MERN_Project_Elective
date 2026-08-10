# 📜 Changelog

All notable changes to the **MERN Project Elective** repository will be documented in this file.

---

## [2.0.0] - 2026-08-10
### 🚀 Major Refactoring & 15-Day Course Transformation
* **Unified Directory Structure:** Consolidated disjointed subfolders into single `backend/`, `frontend/`, `docs/`, and `tests/` trees.
* **MVC Backend Architecture:** Implemented controllers (`userController`, `productController`, `schoolController`, `authController`), async handler wrappers, and centralized error handling middleware.
* **Security & Auth:** Added `bcryptjs` password hashing, `jsonwebtoken` issuance, and `protect` route authorization middleware.
* **React SPA Overhaul:** Built modern Vite + React 18 frontend with React Router v6 navigation, global `AuthContext`, and Axios API service layer (`services/api.js`).
* **15-Day Course Documentation:** Authored 15 detailed daily course guides (`docs/day-01.md` through `docs/day-15.md`) matching a 45-hour curriculum schedule.
* **Automated Test Runners:** Added backend and frontend node test scripts in `tests/`.

---

## [1.0.0] - Initial Release
* Initial college elective lab experiments and route scaffolds.
