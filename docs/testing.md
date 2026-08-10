# 🧪 Automated & Manual Testing Strategy

This document details the testing strategy, automated test scripts, manual API testing workflows, and build verification procedures for both backend and frontend applications.

---

## ⚙️ Automated Test Configuration

The repository includes automated test runners built using Node's native `node:assert` assertion module.

### Backend Automated Test Runner
* **Script Command:** `npm test` (inside `backend/`)
* **Test File:** `tests/backend/api.test.js`
* **Coverage:** Asserts response helper functions (`sendSuccess`, `sendError`) and verifies `asyncHandler` middleware promise rejections.

#### Run Backend Tests:
```bash
cd backend
npm test
```
* **Expected Output:**
  ```text
  🧪 Running Backend Integration & Unit Tests...
  ✅ PASS: sendSuccess helper test
  ✅ PASS: sendError helper test
  ✅ PASS: asyncHandler middleware test

  🎉 ALL BACKEND TESTS PASSED SUCCESSFULLY!
  ```

---

### Frontend Automated Test Runner
* **Script Command:** `npm test` (inside `frontend/`)
* **Test File:** `tests/frontend/components.test.js`
* **Coverage:** Asserts environment variable API base URLs and verifies JSON session storage parsing.

#### Run Frontend Tests:
```bash
cd frontend
npm test
```
* **Expected Output:**
  ```text
  🧪 Running Frontend Component & Service Tests...
  ✅ PASS: Frontend API endpoint configuration test
  ✅ PASS: User session parsing test

  🎉 ALL FRONTEND TESTS PASSED SUCCESSFULLY!
  ```

---

## 🔬 Testing Layers Breakdown

### 1. Unit Testing
* **Helpers:** Testing `sendSuccess` and `sendError` formatting in `backend/src/utils/response.js`.
* **Password Hashing:** Verifying `bcrypt.compare` output on `User` instance methods.

### 2. Integration Testing
* **Route & Controller Execution:** Verifying that express routes call controllers and database models correctly.
* **Error Interception:** Confirming that invalid Mongo ObjectIds trigger 400 Bad Request responses via `middleware/errorHandler.js`.

### 3. Frontend UI Manual Testing
* **User Authentication Flow:** Test user registration (`Register.jsx`), token extraction, `localStorage` saving, and redirect to Home page.
* **CRUD Navigation:** Navigate to `/users`, `/products`, `/schools` and test creating, editing, and deleting records via UI tables and forms.

### 4. Production Build Verification
* **Vite Build Compilation:**
  ```bash
  cd frontend
  npm run build
  ```
  Confirms zero JSX syntax errors, missing imports, or broken bundle assets. Minified files are created inside `frontend/dist/`.
