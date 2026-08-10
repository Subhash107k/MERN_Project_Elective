# Day 05 — REST API & Full CRUD Implementation

## 🎯 What Was Learned
* Built full RESTful Create, Read, Update, Delete (CRUD) database endpoints.
* Executed Mongoose query methods (`create`, `find`, `findById`, `findByIdAndUpdate`, `findByIdAndDelete`).
* Returned semantic HTTP status codes (`200 OK`, `201 Created`, `404 Not Found`).
* Formatted standardized JSON response payloads using response helpers.

## 🧠 Theory & Concepts
REST (Representational State Transfer) is an architectural pattern for web APIs. HTTP methods map directly to database operations: `POST` (Create), `GET` (Read), `PATCH`/`PUT` (Update), and `DELETE` (Delete).

## 🔑 Key Takeaways
* **`User.create(data)`:** Inserts new document into collection.
* **`User.find()`:** Queries documents matching filter conditions.
* **`User.findByIdAndUpdate(id, data, { new: true })`:** Updates document fields and returns updated object.
* **`User.findByIdAndDelete(id)`:** Removes document from database.

## 🏗️ Project Structure
* [`../backend/src/controllers/userController.js`](../backend/src/controllers/userController.js)
* [`../backend/src/routes/userRoutes.js`](../backend/src/routes/userRoutes.js)

## ⚙️ Setup & Configuration
No additional npm packages required.

## 💻 Implementation

### Step 1: Constructed User CRUD Controller (`backend/src/controllers/userController.js`)
```javascript
import User from '../models/User.js';

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({ success: true, data: users });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: updated });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'User deleted' });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
```

## 🧪 Testing & Verification
Tested endpoints in Postman:
1. `POST /api/users` -> Copy returned `_id`.
2. `GET /api/users` -> Verify list array.
3. `PATCH /api/users/<_id>` -> Send updated address.
4. `DELETE /api/users/<_id>` -> Verify deletion response.

## 🔬 Practical Work
Constructed CRUD controller functions in `productController.js` and `schoolController.js`.

## ✅ What Was Completed
* Implemented CRUD operations operating against MongoDB.
* Returned appropriate HTTP status codes for each request.

## ⚠️ Problems Encountered
* `findByIdAndUpdate` returned original document before edit: Caused by omitting `{ new: true }` option.

## 🔧 Troubleshooting & Fixes
Added `{ new: true }` parameter to `findByIdAndUpdate`. Refer to [API Testing Guide](./api-testing.md).

## 📝 Additional Practice
Implemented check verifying if email already exists before executing `User.create()`.

## 📦 Day Deliverable
Functional RESTful CRUD API endpoints for users, products, and schools.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Server executed successfully
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
