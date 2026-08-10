# Day 03 — Express Routing & Dynamic Parameters

## 🎯 Learning Objectives
* Modularize route definitions using `express.Router()`.
* Extract dynamic URL parameters using `req.params`.
* Extract search filter parameters using `req.query`.
* Handle JSON request bodies via `req.body`.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 02](./day-02.md).

## 🧠 Theory
Express Routers act as isolated sub-applications managing specific URI prefixes. Dynamic route matching allows variable path fragments (`:id`) to be bound to `req.params`, while URL query strings (`?search=term`) populate `req.query`.

## 🔑 Key Concepts
* **`express.Router()`:** Mini Express routing instance.
* **Route Parameters (`req.params`):** Path parameters declared with colons (`/users/:id`).
* **Query Parameters (`req.query`):** Optional query string parameters (`/users?role=admin`).
* **Request Body (`req.body`):** JSON payload parsed by `express.json()`.

## 🏗️ Project Structure
* [`../backend/src/routes/userRoutes.js`](../backend/src/routes/userRoutes.js)
* [`../backend/src/routes/productRoutes.js`](../backend/src/routes/productRoutes.js)
* [`../backend/src/routes/schoolRoutes.js`](../backend/src/routes/schoolRoutes.js)

## ⚙️ Installation / Setup
No extra packages required beyond Express.

## 💻 Step-by-Step Coding

### Step 1: Create Modular User Router (`backend/src/routes/userRoutes.js`)
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

### Step 2: Mount Router in `server.js`
```javascript
import userRoutes from './routes/userRoutes.js';
app.use('/api/users', userRoutes);
```

## 🧪 API / Application Testing
Send GET request in Postman/Thunder Client:
```text
GET http://localhost:8000/api/users/12345?role=admin
```

## 🔬 Practical Lab
Create `backend/src/routes/productRoutes.js` supporting GET and POST endpoints at `/api/products`.

## ✅ Expected Result
GET `/api/users/12345` returns `{ "success": true, "userId": "12345" }`.

## ⚠️ Common Errors
* `req.params.id` is `undefined`: Mismatch between colon variable name `:id` and property name accessed in code.

## 🔧 Troubleshooting
Ensure route mounting prefix in `server.js` (`/api/users`) matches client request URL. Refer to [API Testing Guide](./api-testing.md).

## 📝 Practice Exercise
Add dynamic filtering handling `?minPrice=10&maxPrice=100` query parameters in product router.

## 📦 Daily Deliverable
Modular router files handling path and query parameters.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
