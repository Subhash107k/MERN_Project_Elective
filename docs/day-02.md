# Day 2 — Express Server Setup & HTTP Basics

## Learning Objectives
* Understand what Express.js is and why it is used for Node.js web servers.
* Learn how HTTP Request and Response lifecycles work (`req`, `res`).
* Build a functional Express HTTP server listening on configured ports.
* Configure global JSON middleware (`express.json()`, `cors()`).

## What We Learn
Today we initialize an Express application server. We learn how HTTP requests enter server ports, how Express routes requests through middleware functions, and how HTTP status codes (200, 404, 500) convey response state back to clients.

## Why We Learn It
Raw Node.js HTTP modules require extensive boilerplate code to handle routing and request parsing. Express simplifies HTTP web server creation into clean, readable middleware pipelines.

## Important Concepts
* **Express Application (`express()`):** The core application object managing routing, settings, and HTTP middleware.
* **Middleware (`app.use()`):** Functions executed sequentially during the HTTP request-response cycle.
* **Port Listener (`app.listen()`):** Binds the application to a specific TCP network port to receive incoming requests.

## Project Files
* [`backend/src/server.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/server.js)
* [`backend/.env.example`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/.env.example)

## Step-by-Step Explanation
1. Import `express` and `cors` into `backend/src/server.js`.
2. Instantiate the server app: `const app = express();`.
3. Mount body-parsing middleware: `app.use(express.json());`.
4. Create a health check GET route: `app.get('/', (req, res) => ... )`.
5. Start the server listener: `app.listen(8000, () => console.log('Running on port 8000'));`.

## Code Examples
```javascript
import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(8000, () => console.log('Server started on port 8000'));
```

## Practical Exercise
1. Run `cd backend && npm run dev` to start the development server using `nodemon`.
2. Open your web browser or Postman and navigate to `http://localhost:8000/`.
3. Verify that the server returns a 200 OK JSON response.

## Common Errors
* **`EADDRINUSE: address already in use :::8000`**: Port 8000 is occupied by another process. Kill the process or change the port in `.env`.

## How to Debug
Check terminal console logs to verify that `app.listen()` has executed without port conflict errors.

## Homework
Add a GET route `/api/info` that returns a JSON object containing your course name, date, and author name.

## Expected Result
Browser loading `http://localhost:8000/` displays a clean JSON response confirming server operation.

## Interview Questions
1. *What is the role of `express.json()` middleware in an Express application?*
2. *What does the HTTP 404 status code indicate?*

## Day Summary
You have built a fully functional Express HTTP server capable of parsing JSON payloads and serving API responses.
