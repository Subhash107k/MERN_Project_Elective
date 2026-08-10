# Day 02 — Express Server Setup & HTTP Basics

## 🎯 What Was Learned
* Understood Express.js framework architecture for Node.js backend development.
* Configured an Express HTTP server listening on custom network ports (Port 8000).
* Processed HTTP requests (`req`) and returned structured JSON responses (`res`).
* Applied global Express middleware (`cors()`, `express.json()`).

## 🧠 Theory & Concepts
Express.js is an unopinionated web framework for Node.js that abstracts raw HTTP server streams. Every HTTP request-response transaction receives an incoming request object (`req`) containing headers and body payloads, and an outgoing response object (`res`) transmitting HTTP status codes and data.

## 🔑 Key Takeaways
* **Express Application (`express()`):** Core application instance configuring routes and middleware.
* **Port Listener (`app.listen()`):** Binds the Express app to a TCP port to accept incoming connections.
* **Middleware (`app.use()`):** Functions executing sequentially during request processing.
* **HTTP Status Codes:** `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`.

## 🏗️ Project Structure
* [`../backend/src/server.js`](../backend/src/server.js)
* [`../backend/.env.example`](../backend/.env.example)

## ⚙️ Setup & Configuration
Installed Express, CORS, and Dotenv dependencies inside `backend/`:
```bash
cd backend
npm install express cors dotenv
npm install --save-dev nodemon
```

## 💻 Implementation

### Step 1: Configured Environment Variables (`backend/.env`)
```env
PORT=8000
NODE_ENV=development
```

### Step 2: Implemented Express Entry Point (`backend/src/server.js`)
```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: '18-Day / 45-Hour MERN Stack Course REST API is running cleanly',
        version: '1.0.0'
    });
});

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`);
});
```

## 🧪 Testing & Verification
Started server using Nodemon development script:
```bash
npm run dev
```
Sent a GET request to `http://localhost:8000/` using a browser and Postman.

## 🔬 Practical Work
Implemented an additional GET route `/api/health` returning application uptime (`process.uptime()`).

## ✅ What Was Completed
* Initialized Express backend application.
* Configured JSON body parsing and CORS middleware.
* Tested root GET endpoint response.

## ⚠️ Problems Encountered
* `EADDRINUSE :::8000`: Occurred when port 8000 was already in use by a background process.

## 🔧 Troubleshooting & Fixes
Terminated background process or updated `PORT=8001` in `.env`. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Additional Practice
Set custom response headers using `res.setHeader('X-Powered-By', 'MERN App')`.

## 📦 Day Deliverable
Functional Express HTTP server responding to GET requests.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Server executed successfully
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
