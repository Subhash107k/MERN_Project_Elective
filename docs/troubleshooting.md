# 🔧 Troubleshooting & Error Resolution Guide

This guide provides root causes and exact solutions for common issues encountered during local development, database configuration, authentication, and build steps.

---

## 🛑 Common Backend & Database Errors

### 1. MongoDB Connection Failed (`MongooseServerSelectionError`)
* **Symptom:** Terminal displays `MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017`.
* **Cause:** Local MongoDB service is not running on port 27017.
* **Solution:**
  * Start MongoDB service locally:
    * **Windows PowerShell:** `Start-Service MongoDB` or run `mongod`
    * **macOS:** `brew services start mongodb-community`
    * **Linux:** `sudo systemctl start mongod`
  * Alternatively, update `MONGO_URI` in `backend/.env` to use a MongoDB Atlas cloud database URI.

### 2. Port Already in Use (`EADDRINUSE: address already in use :::8000`)
* **Symptom:** Express server crashes on startup with `Error: listen EADDRINUSE :::8000`.
* **Cause:** Another terminal window or background process is using port 8000.
* **Solution:**
  * **Windows PowerShell:**
    ```powershell
    Get-Process -Id (Get-NetTCPConnection -LocalPort 8000).OwningProcess | Stop-Process
    ```
  * **macOS/Linux:**
    ```bash
    kill -9 $(lsof -t -i:8000)
    ```
  * Or edit `PORT=8001` in `backend/.env`.

### 3. Duplicate Key Exception (`E11000 duplicate key error`)
* **Symptom:** MongoDB returns `E11000 duplicate key error collection: users index: email_1`.
* **Cause:** Attempting to register a user with an email address that already exists in the database.
* **Solution:** Use a different unique email address or delete the existing user record.

### 4. Invalid ObjectId Format (`Cast to ObjectId failed`)
* **Symptom:** API returns `400 Bad Request` with `"Resource not found (Invalid ID format)"`.
* **Cause:** Passing a string to `/api/users/:id` that is not a valid 24-character hexadecimal MongoDB ObjectId.
* **Solution:** Ensure the ID string passed in the URL matches a valid 24-character hexadecimal ObjectId.

---

## 🌐 Common Frontend & CORS Errors

### 5. CORS Blocked Request (`Access to XMLHttpRequest blocked by CORS policy`)
* **Symptom:** Browser console logs CORS policy blocked error when React calls Express API.
* **Cause:** Express server missing `cors()` middleware or `CLIENT_URL` mismatch.
* **Solution:** Ensure `backend/src/server.js` contains `app.use(cors())` and `backend/.env` has `CLIENT_URL=http://localhost:5173`.

### 6. Vite Command Not Found (`'vite' is not recognized as an internal command`)
* **Symptom:** Running `npm run dev` in `frontend/` fails with `'vite' is not recognized`.
* **Cause:** `node_modules` directory is missing in `frontend/`.
* **Solution:**
  ```bash
  cd frontend
  npm install
  ```

### 7. Unauthorized Token Errors (`401 Unauthorized - No bearer token`)
* **Symptom:** API calls to protected routes fail with HTTP 401.
* **Cause:** Missing `Authorization: Bearer <token>` header in request.
* **Solution:** Perform login at `/api/auth/login`, copy the returned JWT token, and attach it to the `Authorization` header in Postman or Axios interceptors.
