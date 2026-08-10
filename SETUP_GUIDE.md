# 🛠️ Setup & Local Installation Guide

---

## System Requirements
* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher
* **MongoDB:** Local MongoDB installation (`mongodb://127.0.0.1:27017`) OR a remote MongoDB Atlas cluster URI.

---

## Step 1: Clone Repository
```bash
git clone https://github.com/Subhash107k/MERN_Project_Elective.git
cd MERN_Project_Elective
```

---

## Step 2: Backend Configuration
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create environment configuration file
cp .env.example .env

# Edit .env file if using a non-default MongoDB URI
# MONGO_URI=mongodb://localhost:27017/mern_15day_course

# Launch backend in development mode (with nodemon)
npm run dev
```
Terminal output should confirm:
```text
Server running in development mode on http://localhost:8000
MongoDB Connected: localhost
```

---

## Step 3: Frontend Configuration
Open a **second terminal window**:
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create environment configuration file
cp .env.example .env

# Launch frontend dev server
npm run dev
```
Terminal output will show:
```text
VITE v6.0.1 ready in 250 ms
➜ Local: http://localhost:5173/
```

---

## Step 4: Access Application
Open your web browser and navigate to:
`http://localhost:5173`

---

## Step 5: Run Automated Tests
To run backend unit and API tests:
```bash
cd backend
npm test
```

To run frontend component tests:
```bash
cd frontend
npm test
```
