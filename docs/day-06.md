# Day 6 — MVC Architecture & Centralized Error Middleware

## Learning Objectives
* Understand the Model-View-Controller (MVC) architectural design pattern.
* Separate routing definitions from controller business logic.
* Implement an `asyncHandler` wrapper to eliminate repetitive try-catch blocks.
* Build a centralized Express error-handling middleware.

## What We Learn
Today we refactor the backend into a clean MVC architecture. We decouple inline route logic into controller functions and create a global error middleware (`errorHandler.js`) to handle database errors, missing resources, and malformed JSON payloads uniformly.

## Why We Learn It
Mixing database operations directly inside route files leads to code duplication and scattered error handling. MVC architecture separates concerns into logical, testable layers.

## Important Concepts
* **MVC Pattern:** Architecture separating Data Models, Client Views, and Business Controller Logic.
* **Async Wrapper (`asyncHandler`):** Utility catching rejected Promises in async routes and forwarding them to `next(error)`.
* **Centralized Error Middleware:** Express middleware function taking 4 parameters (`err, req, res, next`) to format all application errors.

## Project Files
* [`backend/src/utils/asyncHandler.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/utils/asyncHandler.js)
* [`backend/src/middleware/errorHandler.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/middleware/errorHandler.js)
* [`backend/src/controllers/productController.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/controllers/productController.js)

## Step-by-Step Explanation
1. Create `utils/asyncHandler.js` to wrap controller functions.
2. Refactor controller functions to throw standard errors (`throw new Error('User not found')`).
3. Create `middleware/errorHandler.js` to catch errors and return `{ success: false, message }`.
4. Mount `app.use(errorHandler)` as the final middleware in `server.js`.

## Code Examples
```javascript
// Centralized Error Middleware Example
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
};
```

## Practical Exercise
1. Send a GET request to an invalid ObjectId URL: `http://localhost:8000/api/users/invalid_id`.
2. Verify that the server returns a clean `400 Bad Request` JSON response without crashing.

## Common Errors
* **`UnhandledPromiseRejectionWarning`**: Occurs when an async error is thrown inside a route that is not wrapped in `asyncHandler` or `try-catch`.

## How to Debug
Ensure all controller exports are wrapped with `asyncHandler(...)` and `errorHandler` is mounted AFTER all route definitions.

## Homework
Add custom handling in `errorHandler.js` for MongoDB duplicate key error code `11000`.

## Expected Result
All server errors yield predictable JSON responses with appropriate HTTP status codes.

## Interview Questions
1. *Why must an Express error middleware function declare exactly 4 arguments (`err, req, res, next`)?*
2. *What problem does the `asyncHandler` pattern solve in Express application architecture?*

## Day Summary
You have refactored your backend into an MVC architecture with centralized error handling middleware.
