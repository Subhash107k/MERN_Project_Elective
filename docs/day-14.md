# Day 14 — Validation, Security Audit & Testing

## Learning Objectives
* Conduct a full security audit across frontend and backend layers.
* Implement server-side input validation middleware (`validateBody`).
* Implement NID unique identifier handling with upsert workflows.
* Write and execute automated unit and integration tests for backend APIs and frontend components.

## What We Learn
Today we audit and harden application quality. We implement strict payload validation middleware, handle unique NID identifier workflows to prevent duplicate records, and run automated node test runners to verify API endpoints.

## Why We Learn It
Unvalidated input leads to database corruption, NoSQL injection vulnerabilities, and system crashes. Automated test suites ensure code changes do not break existing features.

## Important Concepts
* **Server-Side Validation:** Validating input parameters at the API gateway before executing database queries.
* **NID Upsert Workflow:** Updating existing identifier records instead of throwing duplicate key database crashes.
* **Automated Testing:** Programmatically asserting that software units return expected outputs under test conditions.

## Project Files
* [`backend/src/middleware/validationMiddleware.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/middleware/validationMiddleware.js)
* [`tests/backend/api.test.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/tests/backend/api.test.js)
* [`tests/frontend/components.test.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/tests/frontend/components.test.js)

## Step-by-Step Explanation
1. Mount `validateBody(['name', 'email', 'password'])` middleware on user endpoints.
2. Add NID checking in `authController.js`: search by NID and update existing document if match found.
3. Open terminal in `backend/` and run `npm test` to execute automated test suite.
4. Verify all assertions pass with green checkmarks.

## Code Examples
```javascript
// Lightweight Validation Middleware Example
export const validateBody = (fields) => (req, res, next) => {
    const missing = fields.filter(f => !req.body[f]);
    if (missing.length > 0) {
        return res.status(400).json({ message: `Missing fields: ${missing.join(', ')}` });
    }
    next();
};
```

## Practical Exercise
1. Run `cd backend && npm test` in terminal.
2. Run `cd frontend && npm test` in terminal.
3. Confirm that both test runners output `ALL TESTS PASSED SUCCESSFULLY!`.

## Common Errors
* **`AssertionError: Expected 200, got 400`**: Indicates a failing test assertion. Inspect output log trace to locate parameter mismatch.

## How to Debug
Read test output error messages carefully to identify which module or response helper failed assertion tests.

## Homework
Add a test case in `tests/backend/api.test.js` checking that invalid JSON requests return status code 400.

## Expected Result
100% passing automated test suite verifying input validation, error handling, and response helper utilities.

## Interview Questions
1. *Why should input validation be performed on both client and server sides?*
2. *What is the difference between unit testing and integration testing?*

## Day Summary
You have implemented input payload validation, duplicate NID upsert handling, and verified application reliability with automated test runners.
