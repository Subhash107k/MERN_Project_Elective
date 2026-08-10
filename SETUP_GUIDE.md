# 🛠️ Complete Installation, Setup & API Testing Guide

## MERN Stack Development Project

This guide provides complete instructions for installing the required software, configuring the MERN application, installing backend and frontend dependencies, configuring MongoDB, starting the development servers, and testing APIs with Postman or Thunder Client.

---

# 1. System Requirements

Before installing the project, ensure the following are available.

| Software        |   Recommended Version | Purpose                    |
| --------------- | --------------------: | -------------------------- |
| Node.js         |     20.x LTS or newer | Backend/frontend runtime   |
| npm             |    Comes with Node.js | Package manager            |
| Git             |                Latest | Repository management      |
| MongoDB         | 7.x/8.x or compatible | Database                   |
| MongoDB Compass |                Latest | Optional database GUI      |
| VS Code         |                Latest | Development                |
| Postman         |                Latest | API testing                |
| Thunder Client  |                Latest | API testing inside VS Code |

> Use the versions required by the project's `package.json` if they are more restrictive than the versions listed above.

---

# 2. Install Node.js

Download and install Node.js from the official website:

https://nodejs.org/

After installation, open a **new terminal** and verify:

```powershell
node --version
npm --version
```

Example:

```text
v20.x.x
10.x.x
```

If both commands return a version number, Node.js and npm are installed correctly.

---

# 3. Install Git

Download Git from:

https://git-scm.com/downloads

Verify the installation:

```powershell
git --version
```

Example:

```text
git version 2.x.x
```

Configure Git if this is the first project on the computer:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

---

# 4. Install MongoDB

## Option A — MongoDB Community Server

Install MongoDB Community Server on the local machine.

After installation, verify that MongoDB is available.

Depending on the installation, MongoDB can be started as a Windows service.

Check the MongoDB service:

```powershell
Get-Service MongoDB
```

If it is stopped:

```powershell
Start-Service MongoDB
```

Check again:

```powershell
Get-Service MongoDB
```

Expected:

```text
Status   Name
------   ----
Running  MongoDB
```

---

## Option B — MongoDB Atlas

Instead of installing MongoDB locally, the application can use MongoDB Atlas.

Create a MongoDB Atlas cluster and obtain the connection URI.

Example:

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/mern_project
```

Make sure the database user has the required permissions and the network access configuration allows the development machine to connect.

---

# 5. Optional — Install MongoDB Compass

MongoDB Compass provides a graphical interface for viewing MongoDB databases and collections.

After connecting to the local database, use:

```text
mongodb://localhost:27017
```

For Atlas, use the Atlas connection string.

You should be able to see:

```text
mern_project
│
├── users
├── products
└── schools
```

The exact collection names depend on the Mongoose model configuration.

---

# 6. Install Visual Studio Code

Install VS Code from:

https://code.visualstudio.com/

Recommended extensions:

```text
ES7+ React/Redux/React-Native Snippets
ESLint
Prettier - Code formatter
Thunder Client
GitLens
MongoDB for VS Code
```

Only install extensions that are useful for the project; they are not required for the application itself.

---

# 7. Install Postman

Download Postman from:

https://www.postman.com/downloads/

Postman is used to test backend APIs independently of the React frontend.

Recommended collection structure:

```text
MERN Project API
│
├── Authentication
├── Users
├── Products
└── Schools
```

---

# 8. Install Thunder Client

If you prefer testing APIs directly inside VS Code:

1. Open VS Code.
2. Open Extensions.
3. Search for `Thunder Client`.
4. Install the extension.
5. Restart VS Code if required.

Create a collection:

```text
MERN Project API
```

---

# 9. Clone the Project

Open PowerShell:

```powershell
cd D:\My_Projects
```

Clone the repository:

```powershell
git clone https://github.com/Subhash107k/MERN_Project_Elective.git
```

Enter the project:

```powershell
cd MERN_Project_Elective
```

Verify:

```powershell
Get-ChildItem
```

Expected project structure:

```text
MERN_Project_Elective
│
├── backend
├── frontend
├── docs
└── README.md
```

---

# 10. Install Backend Dependencies

Enter the backend directory:

```powershell
cd backend
```

Install all dependencies:

```powershell
npm install
```

This reads:

```text
backend/package.json
```

and installs the required packages into:

```text
backend/node_modules
```

---

# 11. Backend Dependencies

The backend may contain packages such as:

```text
express
mongoose
bcryptjs
jsonwebtoken
cors
dotenv
```

Do **not** manually install packages that are already listed in `package.json`.

The recommended command is:

```powershell
npm install
```

If a package is genuinely missing from `package.json`, install it with:

```powershell
npm install PACKAGE_NAME
```

Example:

```powershell
npm install dotenv
```

For a development-only package:

```powershell
npm install -D PACKAGE_NAME
```

Example:

```powershell
npm install -D nodemon
```

---

# 12. Create Backend `.env`

If the repository contains:

```text
backend/.env.example
```

copy it.

### PowerShell

```powershell
Copy-Item .env.example .env
```

### Command Prompt

```cmd
copy .env.example .env
```

### Git Bash / Linux / macOS

```bash
cp .env.example .env
```

---

# 13. Configure Backend `.env`

Example:

```env
PORT=8000
NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/mern_project

JWT_SECRET=change_this_to_a_long_random_secret
JWT_EXPIRES_IN=7d
```

Use the actual environment variable names expected by the project's source code.

For MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/mern_project
```

### Important

Never commit:

```text
.env
```

to Git.

The `.gitignore` should contain:

```gitignore
.env
.env.*
!.env.example
node_modules/
dist/
build/
coverage/
```

---

# 14. Verify Backend Installation

Run:

```powershell
npm run
```

This displays the scripts available in `package.json`.

For example:

```text
Scripts available:
  dev
  start
  test
  build
```

Use the scripts actually provided by the project.

Start development mode:

```powershell
npm run dev
```

Expected:

```text
Server running on port 8000
MongoDB Connected Successfully
```

The exact messages depend on the backend implementation.

---

# 15. Install Frontend Dependencies

Open a **second terminal**.

Move to the project:

```powershell
cd D:\My_Projects\MERN_Project_Elective
```

Enter frontend:

```powershell
cd frontend
```

Install dependencies:

```powershell
npm install
```

This installs the packages listed in:

```text
frontend/package.json
```

---

# 16. Frontend Dependencies

A typical React/Vite project may contain packages such as:

```text
react
react-dom
react-router-dom
axios
```

Development dependencies may include:

```text
vite
typescript
eslint
prettier
```

The exact dependencies should be determined from the project's `package.json`.

Do not install duplicate packages manually when they are already declared.

---

# 17. Create Frontend `.env`

If available:

```text
frontend/.env.example
```

copy it.

PowerShell:

```powershell
Copy-Item .env.example .env
```

Command Prompt:

```cmd
copy .env.example .env
```

Linux/macOS:

```bash
cp .env.example .env
```

---

# 18. Configure Frontend API URL

For a Vite application, an example configuration is:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

The exact variable name must match the frontend code.

For example, if the application uses:

```javascript
import.meta.env.VITE_API_BASE_URL;
```

then the environment variable must be:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

After modifying frontend `.env`, restart the Vite development server.

---

# 19. Start the Frontend

From:

```text
frontend/
```

run:

```powershell
npm run dev
```

Expected:

```text
Local: http://localhost:5173/
```

Open:

```text
http://localhost:5173
```

---

# 20. Start the Complete Application

The recommended development setup uses two terminals.

### Terminal 1 — Backend

```powershell
cd D:\My_Projects\MERN_Project_Elective\backend
npm run dev
```

### Terminal 2 — Frontend

```powershell
cd D:\My_Projects\MERN_Project_Elective\frontend
npm run dev
```

Application:

```text
Frontend
http://localhost:5173

Backend
http://localhost:8000

MongoDB
mongodb://localhost:27017
```

---

# 21. Verify Backend Health

If the project provides a health endpoint, test:

```text
GET http://localhost:8000/api/health
```

If no health endpoint exists, verify the server using an existing API endpoint such as:

```text
GET http://localhost:8000/api/products
```

The correct endpoint depends on the current backend route configuration.

---

# 22. Verify MongoDB

Using MongoDB Compass, connect to:

```text
mongodb://localhost:27017
```

Locate the configured application database.

After registering or creating records, verify that documents appear in collections such as:

```text
users
products
schools
```

---

# 23. Install Everything After Cloning

For a completely fresh setup, run:

### Backend

```powershell
cd backend
npm install
```

### Frontend

```powershell
cd ..\frontend
npm install
```

Then configure:

```text
backend/.env
frontend/.env
```

Finally start both applications.

---

# 24. Clean Reinstallation

If dependencies become corrupted, remove `node_modules` and reinstall.

### Backend — PowerShell

```powershell
cd backend
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

### Frontend — PowerShell

```powershell
cd ..\frontend
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

> Normally, do not delete `package-lock.json` unless there is a specific dependency-resolution problem. Prefer removing only `node_modules` and running `npm ci` when a valid lockfile exists.

Safer clean installation:

```powershell
Remove-Item -Recurse -Force node_modules
npm ci
```

---

# 25. Recommended Installation Commands — Quick Reference

## Check tools

```powershell
node --version
npm --version
git --version
```

## Clone

```powershell
git clone https://github.com/Subhash107k/MERN_Project_Elective.git
cd MERN_Project_Elective
```

## Backend

```powershell
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```

## Frontend

Open a second terminal:

```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```

---

# 26. API Testing Tools

After both servers are running:

```text
Frontend:
http://localhost:5173

Backend:
http://localhost:8000
```

Open Postman or Thunder Client.

Use:

```text
Base URL:
http://localhost:8000
```

Authentication:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 27. Recommended API Testing Sequence

Always test APIs in this order:

```text
1. Start MongoDB
       ↓
2. Start Backend
       ↓
3. Verify MongoDB connection
       ↓
4. Register User
       ↓
5. Login
       ↓
6. Copy JWT
       ↓
7. Test /auth/me
       ↓
8. Test Users API
       ↓
9. Test Products API
       ↓
10. Test Schools API
       ↓
11. Test Invalid Requests
       ↓
12. Run Automated Tests
```

---

# 28. Authentication API

## Register

```http
POST http://localhost:8000/api/auth/register
Content-Type: application/json
```

Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "address": "123 Main Street",
  "phone": "+1234567890",
  "nidNumber": "NID123456"
}
```

---

## Login

```http
POST http://localhost:8000/api/auth/login
Content-Type: application/json
```

Body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Copy the returned JWT.

---

## Authenticated Request

```http
GET http://localhost:8000/api/auth/me
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 29. Users API

```http
GET    http://localhost:8000/api/users
GET    http://localhost:8000/api/users/USER_ID
POST   http://localhost:8000/api/users
PATCH  http://localhost:8000/api/users/USER_ID
DELETE http://localhost:8000/api/users/USER_ID
```

---

# 30. Products API

```http
GET    http://localhost:8000/api/products
POST   http://localhost:8000/api/products
PATCH  http://localhost:8000/api/products/PRODUCT_ID
DELETE http://localhost:8000/api/products/PRODUCT_ID
```

Create example:

```json
{
  "name": "Wireless Mechanical Keyboard",
  "price": 129.99,
  "quantity": 50,
  "description": "RGB Backlit Ergonomic Mechanical Keyboard",
  "category": "Electronics"
}
```

---

# 31. Schools API

```http
GET    http://localhost:8000/api/schools
POST   http://localhost:8000/api/schools
PATCH  http://localhost:8000/api/schools/SCHOOL_ID
DELETE http://localhost:8000/api/schools/SCHOOL_ID
```

Create example:

```json
{
  "name": "Harvard High School",
  "location": "Cambridge, MA",
  "principalName": "Dr. Elizabeth Vance",
  "totalStudents": 1500,
  "email": "info@harvardhigh.edu",
  "phone": "+16174951000"
}
```

---

# 32. Automated Tests

Backend:

```powershell
cd backend
npm test
```

Frontend:

```powershell
cd frontend
npm test
```

If the project uses a different test script, check:

```powershell
npm run
```

and use the configured test command.

---

# 33. Production Build

Frontend:

```powershell
cd frontend
npm run build
```

Backend:

```powershell
cd backend
npm run build
```

The backend build command should only be used if a `build` script exists in `backend/package.json`.

---

# 34. Check for Outdated Packages

Run:

```powershell
npm outdated
```

This displays packages with available updates.

Do not blindly upgrade every package in a production project. Review breaking-version changes first.

---

# 35. Check Installed Dependencies

Backend:

```powershell
cd backend
npm list --depth=0
```

Frontend:

```powershell
cd frontend
npm list --depth=0
```

This is useful when diagnosing missing or incompatible packages.

---

# 36. Security Checks

Before pushing the project to GitHub, verify:

```text
.env
```

is not committed.

Check:

```powershell
git status
```

If `.env` appears in the list of files to commit, stop and add it to `.gitignore`.

Never commit:

```text
JWT secrets
MongoDB passwords
API keys
SMTP passwords
Private credentials
Production environment variables
```

---

# 37. Final Fresh-Machine Installation

A new developer should be able to perform the following sequence:

```powershell
# 1. Clone
git clone https://github.com/Subhash107k/MERN_Project_Elective.git

# 2. Enter project
cd MERN_Project_Elective

# 3. Backend
cd backend
npm install
Copy-Item .env.example .env

# 4. Configure backend .env
# Add MongoDB URI and JWT configuration

# 5. Start backend
npm run dev
```

Open a second terminal:

```powershell
# 6. Enter project
cd D:\My_Projects\MERN_Project_Elective

# 7. Frontend
cd frontend
npm install
Copy-Item .env.example .env

# 8. Configure frontend .env

# 9. Start frontend
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# 38. Installation Success Criteria

The installation is considered successful when all of the following are true:

```text
✓ Node.js installed
✓ npm installed
✓ Git installed
✓ MongoDB running/Atlas accessible
✓ Backend dependencies installed
✓ Frontend dependencies installed
✓ Backend .env configured
✓ Frontend .env configured
✓ Backend starts successfully
✓ MongoDB connection succeeds
✓ Frontend starts successfully
✓ Registration works
✓ Login works
✓ JWT authentication works
✓ Users API works
✓ Products API works
✓ Schools API works
✓ Postman/Thunder Client requests succeed
✓ Automated tests pass
✓ Production build succeeds
```

---

# 39. Troubleshooting Commands

### Check Node

```powershell
node -v
```

### Check npm

```powershell
npm -v
```

### Check Git

```powershell
git --version
```

### Check MongoDB service

```powershell
Get-Service MongoDB
```

### Check port 8000

```powershell
netstat -ano | findstr :8000
```

### Check port 5173

```powershell
netstat -ano | findstr :5173
```

### Check project scripts

```powershell
npm run
```

### Check dependencies

```powershell
npm list --depth=0
```

### Check outdated dependencies

```powershell
npm outdated
```

---

# 40. Final Development Architecture

```text
                         DEVELOPER
                             │
             ┌───────────────┴───────────────┐
             │                               │
             ▼                               ▼
        VS Code                         Postman
             │                         Thunder Client
             │                               │
             ▼                               │
     ┌───────────────┐                       │
     │ React + Vite  │◄──────────────────────┘
     │    :5173      │
     └───────┬───────┘
             │
             │ HTTP / REST / JSON
             ▼
     ┌───────────────┐
     │ Express API   │
     │    :8000      │
     └───────┬───────┘
             │
             │ Mongoose
             ▼
     ┌───────────────┐
     │    MongoDB    │
     │ :27017/Atlas  │
     └───────────────┘
```

This installation procedure provides a reproducible development environment from a clean machine through dependency installation, environment configuration, database setup, application startup, API testing, automated testing, and production-build verification.
