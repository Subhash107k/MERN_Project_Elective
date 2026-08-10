# Day 3 — Express Routing & Parameters

## Learning Objectives
* Understand Express `Router()` instances for modular endpoint organization.
* Extract parameters from dynamic URLs (`req.params`).
* Access request body data (`req.body`) and query string filters (`req.query`).
* Test backend HTTP endpoints using Postman or Thunder Client.

## What We Learn
Today we structure application routes into dedicated route files. We learn how dynamic parameters (`/users/:id`) enable resource targeting, and how HTTP verbs (GET, POST, PATCH, DELETE) map to CRUD actions.

## Why We Learn It
Placing all application routes inside a single `server.js` file creates unmaintainable code. Express routers decouple route path definitions into modular sub-routers.

## Important Concepts
* **Express `Router()`:** Mini-applications capable of performing middleware and routing functions.
* **URL Route Parameters (`req.params`):** Named URL segments used to capture values at specific positions (e.g. `:id`).
* **Request Body (`req.body`):** Key-value data pairs submitted in POST/PATCH HTTP payloads.

## Project Files
* [`backend/src/routes/userRoutes.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/routes/userRoutes.js)
* [`backend/src/routes/productRoutes.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/routes/productRoutes.js)

## Step-by-Step Explanation
1. Create a router instance: `const router = Router();`.
2. Define route chains: `router.route('/').get(...).post(...)`.
3. Export the router: `export default router;`.
4. Mount the router in `server.js`: `app.use('/api/users', userRoutes);`.

## Code Examples
```javascript
import { Router } from 'express';
const router = Router();

// Dynamic parameter route
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Fetching user with ID ${userId}` });
});

export default router;
```

## Practical Exercise
1. Open Postman or VS Code Thunder Client.
2. Send a `GET` request to `http://localhost:8000/api/users`.
3. Send a `POST` request to `http://localhost:8000/api/users` with a JSON payload in the request body.

## Common Errors
* **`req.body` is `undefined`**: Happens when `app.use(express.json())` middleware is not mounted before route declarations.

## How to Debug
Add `console.log('Incoming Payload:', req.body);` inside route handlers to inspect incoming client data.

## Homework
Create a dynamic route `/api/products/search?category=electronics` that extracts and logs query parameters (`req.query`).

## Expected Result
Postman receives structured JSON responses confirming parameter extraction for dynamic routes.

## Interview Questions
1. *How do `req.params` and `req.query` differ in Express routing?*
2. *Why should route middleware like `express.json()` be mounted before router endpoints?*

## Day Summary
You have organized modular sub-routers and mastered dynamic parameter extraction across Express endpoints.
