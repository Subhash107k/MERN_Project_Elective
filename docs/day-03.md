# Day 03 — Express Routing & Dynamic Parameters

## 🎯 What Was Learned
* Modularized route definitions using `express.Router()`.
* Extracted dynamic URL path parameters using `req.params`.
* Extracted search filter query string parameters using `req.query`.
* Received and processed incoming JSON request body payloads via `req.body`.

## 🧠 Theory & Concepts
Express Routers operate as mini sub-applications managing specific URI prefixes. Dynamic route matching allows variable path fragments (`:id`) to be bound to `req.params`, while URL query strings (`?search=term`) populate `req.query`.

## 🔑 Key Takeaways
* **`express.Router()`:** Modular router instance isolating endpoints into clean files.
* **Route Parameters (`req.params`):** Path parameters declared with colons (`/users/:id`).
* **Query Parameters (`req.query`):** Optional query string parameters (`/users?role=admin`).
* **Request Body (`req.body`):** JSON payload parsed by `express.json()`.

## 🏗️ Project Structure
* [`../backend/src/routes/userRoutes.js`](../backend/src/routes/userRoutes.js)
* [`../backend/src/routes/productRoutes.js`](../backend/src/routes/productRoutes.js)
* [`../backend/src/routes/schoolRoutes.js`](../backend/src/routes/schoolRoutes.js)

## ⚙️ Setup & Configuration
No additional npm dependencies required.

## 💻 Implementation

### Step 1: Constructed Modular User Router (`backend/src/routes/userRoutes.js`)
```javascript
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json({ success: true, message: 'Fetch all users', query: req.query });
});

router.get('/:id', (req, res) => {
    res.json({ success: true, userId: req.params.id });
});

export default router;
```

### Step 2: Mounted Router in Entry Server File (`backend/src/server.js`)
```javascript
import userRoutes from './routes/userRoutes.js';
app.use('/api/users', userRoutes);
```

## 🧪 Testing & Verification
Tested endpoints using Postman and Thunder Client:
* `GET http://localhost:8000/api/users`
* `GET http://localhost:8000/api/users/12345?role=admin`

## 🔬 Practical Work
Constructed `productRoutes.js` and `schoolRoutes.js` routers supporting GET and POST endpoints at `/api/products` and `/api/schools`.

## ✅ What Was Completed
* Decoupled server routes into modular files.
* Tested dynamic path parameter extraction (`:id`).
* Verified query parameter handling (`req.query`).

## ⚠️ Problems Encountered
* `req.params.id` evaluated to `undefined`: Caused by mismatch between route placeholder name `:id` and property accessed in code.

## 🔧 Troubleshooting & Fixes
Ensured colon variable name matched `req.params` property name. Refer to [API Testing Guide](./api-testing.md).

## 📝 Additional Practice
Implemented query filtering handling `?minPrice=10&maxPrice=100` parameters in `productRoutes.js`.

## 📦 Day Deliverable
Modular Express routers handling dynamic path parameters and query strings.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Server executed successfully
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
