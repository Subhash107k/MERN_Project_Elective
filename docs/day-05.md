# Day 05 — REST API & Full CRUD Implementation

## 🎯 Learning Objectives
* Build full RESTful Create, Read, Update, Delete (CRUD) endpoints.
* Execute Mongoose query methods (`create`, `find`, `findById`, `findByIdAndUpdate`, `findByIdAndDelete`).
* Return semantic HTTP status codes (`200 OK`, `201 Created`, `404 Not Found`).
* Send standardized JSON response payloads using response helpers.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 04](./day-04.md).

## 🧠 Theory
REST (Representational State Transfer) is an architectural style for HTTP APIs. Standard HTTP methods map to CRUD database operations: `POST` (Create), `GET` (Read), `PATCH`/`PUT` (Update), and `DELETE` (Delete).

## 🔑 Key Concepts
* **`User.create(data)`:** Inserts new document into collection.
* **`User.find()`:** Queries documents matching filters.
* **`User.findByIdAndUpdate(id, data, { new: true })`:** Updates document fields and returns updated object.
* **`User.findByIdAndDelete(id)`:** Removes document from database.

## 🏗️ Project Structure
* [`../backend/src/controllers/userController.js`](../backend/src/controllers/userController.js)
* [`../backend/src/routes/userRoutes.js`](../backend/src/routes/userRoutes.js)

## ⚙️ Installation / Setup
No new packages required.

## 💻 Step-by-Step Coding

### Step 1: Implement User CRUD Controller (`backend/src/controllers/userController.js`)
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

## 🧪 API / Application Testing
Test `POST /api/users` and `GET /api/users` in Postman or Thunder Client. Refer to [API Testing Guide](./api-testing.md).

## 🔬 Practical Lab
Implement full CRUD controllers for `Product` model in `productController.js`.

## ✅ Expected Result
`POST /api/users` creates document in MongoDB and returns HTTP 201.

## ⚠️ Common Errors
* `findByIdAndUpdate` returns old document: Forgetting `{ new: true }` option.

## 🔧 Troubleshooting
Verify MongoDB service is active. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Add validation checking if email already exists before `User.create()`.

## 📦 Daily Deliverable
Functional RESTful CRUD API endpoints for users and products.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
