# ⚙️ Complete Installation & Setup Guide

This document provides complete instructions for installing prerequisites, setting up environment variables, installing dependencies, and running both the backend API and frontend React applications.

---

## 📌 Prerequisites

Before running the application, ensure your environment has the following software installed:

* **Node.js:** v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
* **npm:** v9.0.0 or higher (comes bundled with Node.js)
* **Git:** Version control client ([Download Git](https://git-scm.com/))
* **MongoDB:** Local MongoDB Community Server (`mongodb://localhost:27017`) or a MongoDB Atlas Cloud Connection URI ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
* **MongoDB Compass (Optional):** Graphical GUI for inspecting MongoDB database collections ([Download Compass](https://www.mongodb.com/products/tools/compass))
* **VS Code:** Code editor ([Download VS Code](https://code.visualstudio.com/))
* **API Testing Client:** Postman ([Download Postman](https://www.postman.com/)) or VS Code Thunder Client extension

---

## 🚀 Repository Setup

### 1. Clone Repository
```bash
git clone https://github.com/Subhash107k/MERN_Project_Elective.git
cd MERN_Project_Elective
```

### 2. Backend Environment & Dependency Installation
Navigate to `backend/` and install dependencies:
```bash
cd backend
npm install
```

Create `backend/.env` from template:
* **On Linux/macOS/Git Bash:**
  ```bash
  cp .env.example .env
  ```
* **On Windows PowerShell:**
  ```powershell
  Copy-Item .env.example .env
  ```

#### Backend Environment Variables (`backend/.env`):
```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/mern_course
JWT_SECRET=replace_with_a_secure_jwt_secret_key_12345
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 3. Frontend Environment & Dependency Installation
Navigate to `frontend/` and install dependencies:
```bash
cd ../frontend
npm install
```

Create `frontend/.env` from template:
* **On Linux/macOS/Git Bash:**
  ```bash
  cp .env.example .env
  ```
* **On Windows PowerShell:**
  ```powershell
  Copy-Item .env.example .env
  ```

#### Frontend Environment Variables (`frontend/.env`):
```env
VITE_API_URL=http://localhost:8000/api
```

---

## 🏃 Running the Application

### Start Backend Development Server
Inside `backend/`, run:
```bash
npm run dev
```
* Backend server will start listening at `http://localhost:8000`.
* Output log will confirm `MongoDB Connected Successfully`.

### Start Frontend Development Server
Inside `frontend/`, run:
```bash
npm run dev
```
* Frontend React SPA will launch at `http://localhost:5173`.

---

## 🧪 Verification & Clean Reinstall

### Verify Backend Health Endpoint
Open your browser and navigate to `http://localhost:8000/`. You should receive:
```json
{
  "success": true,
  "message": "18-Day / 45-Hour MERN Stack Course REST API is running cleanly",
  "version": "1.0.0"
}
```

### Clean Reinstall (If Dependencies Get Corrupted)
To perform a complete clean reinstall of node modules:
```powershell
# Reset Frontend Dependencies
cd frontend
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install

# Reset Backend Dependencies
cd ../backend
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

---

## 📦 Production Bundle Build

To compile an optimized static production build of the frontend React SPA:
```bash
cd frontend
npm run build
```
Vite will compile minified static assets inside `frontend/dist/`.
