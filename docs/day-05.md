# Day 5 — REST API & Full CRUD Implementation

## Learning Objectives
* Build full RESTful Create, Read, Update, Delete (CRUD) endpoints.
* Implement database query methods (`Model.create`, `find`, `findById`, `findByIdAndUpdate`, `findByIdAndDelete`).
* Return appropriate HTTP status codes (201 Created, 200 OK, 404 Not Found).
* Structure standardized JSON API responses.

## What We Learn
Today we build operational database endpoints. We learn how POST requests persist new documents, GET requests retrieve records, PATCH requests update specific fields, and DELETE requests remove documents.

## Why We Learn It
CRUD operations form the back-bone of data-driven web applications. Understanding database CRUD queries enables developers to serve client frontend requirements.

## Important Concepts
* **Create (`POST`):** Instantiates and saves new database documents via `Model.create(req.body)`.
* **Read (`GET`):** Queries database collections using `Model.find()` or `Model.findById(id)`.
* **Update (`PATCH`):** Modifies existing documents using `Model.findByIdAndUpdate(id, data, { new: true })`.
* **Delete (`DELETE`):** Removes documents using `Model.findByIdAndDelete(id)`.

## Project Files
* [`backend/src/controllers/userController.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/controllers/userController.js)
* [`backend/src/routes/userRoutes.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/routes/userRoutes.js)

## Step-by-Step Explanation
1. Import Mongoose Model into the controller file.
2. Write async handlers for each CRUD action.
3. Handle missing resources with 404 status codes.
4. Test all 5 endpoints (`POST`, `GET all`, `GET by ID`, `PATCH`, `DELETE`) in Postman.

## Code Examples
```javascript
// Example User Creation Controller
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
```

## Practical Exercise
1. Open Postman and send `POST /api/users` with a valid JSON body.
2. Copy the returned `_id` field.
3. Send `GET /api/users/<id>` using the copied ID.
4. Send `PATCH /api/users/<id>` to update the user's name.
5. Send `DELETE /api/users/<id>` to remove the user.

## Common Errors
* **`CastError: Cast to ObjectId failed for value "123"`**: The ID passed in URL parameters is not a valid 24-character hex MongoDB ObjectId.

## How to Debug
Validate `req.params.id` length or wrap Mongoose database calls in try-catch blocks to return clean error messages.

## Homework
Implement full CRUD endpoints for the `School` entity in `backend/src/controllers/schoolController.js`.

## Expected Result
All 5 HTTP CRUD endpoints execute successfully and return consistent JSON payloads.

## Interview Questions
1. *What is the difference between PUT and PATCH HTTP methods for updating resources?*
2. *Why should database operations always use `async/await` in Node.js?*

## Day Summary
You have built full RESTful CRUD API endpoints operating against a live MongoDB database.
