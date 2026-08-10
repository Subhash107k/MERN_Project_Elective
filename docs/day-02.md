# Day 02 — Express Server Setup & HTTP Basics

## 🎯 Learning Objectives
* Understand Express.js web framework fundamentals.
* Configure an Express application listening on custom network ports (Port 8000).
* Handle HTTP requests (`req`) and format JSON responses (`res`).
* Apply global Express middleware (`cors()`, `express.json()`).

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 01](./day-01.md).
* Node.js v18+ installed.

## 🧠 Theory
Express.js is a unopinionated web framework for Node.js. It simplifies HTTP server creation, request routing, and middleware processing. Every HTTP transaction consists of an incoming `IncomingMessage` (`req`) and outgoing `ServerResponse` (`res`).

## 🔑 Key Concepts
* **Express App (`express()`):** Core application instance configuring routes and middleware.
* **Port Listener (`app.listen()`):** Binds the server to a TCP port to accept requests.
* **Middleware (`app.use()`):** Functions executing in sequence during request processing.
* **HTTP Status Codes:** `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`.

## 🏗️ Project Structure
* [`../backend/src/server.js`](../backend/src/server.js)
* [`../backend/.env.example`](../backend/.env.example)

## ⚙️ Installation / Setup
Inside `backend/`, install packages:
```bash
cd backend
npm install express cors dotenv
npm install --save-dev nodemon
```

## 💻 Step-by-Step Coding

### Step 1: Create `.env` Environment Configuration
```env
PORT=8000
NODE_ENV=development
```

### Step 2: Configure Express Entry Point (`backend/src/server.js`)
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

## 🧪 API / Application Testing
Start dev server with nodemon:
```bash
npm run dev
```
Open `http://localhost:8000/` in browser or Postman.

## 🔬 Practical Lab
Add a GET route `/api/health` returning uptime seconds (`process.uptime()`).

## ✅ Expected Result
Browser displays JSON response: `{"success":true,"message":"18-Day / 45-Hour MERN Stack Course REST API is running cleanly","version":"1.0.0"}`.

## ⚠️ Common Errors
* `EADDRINUSE :::8000`: Port 8000 is occupied by another process.

## 🔧 Troubleshooting
Terminate background Node process using Task Manager or change `PORT=8001` in `.env`. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Add custom headers using `res.setHeader('X-Powered-By', 'MERN Course App')`.

## 📦 Daily Deliverable
Functional Express HTTP server responding to GET requests.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
