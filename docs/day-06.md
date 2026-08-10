# Day 06 — MVC Architecture & Centralized Error Middleware

## 🎯 Learning Objectives
* Separate application concerns using Model-View-Controller (MVC) architecture.
* Implement `asyncHandler` wrapper utility to eliminate repetitive `try...catch` blocks.
* Build centralized Express 4-parameter error handling middleware (`errorHandler.js`).
* Intercept invalid ObjectIds (`CastError`) and duplicate keys (`11000`).

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 05](./day-05.md).

## 🧠 Theory
The MVC pattern isolates business data (Model), interface views (View), and HTTP request processing (Controller). Centralized Express error middleware (`(err, req, res, next)`) intercepts unhandled promise rejections, formatting clean JSON errors.

## 🔑 Key Concepts
* **MVC Pattern:** Modular decoupling of routes, logic, and schemas.
* **`asyncHandler`:** Higher-order function wrapping async controllers in `Promise.resolve().catch(next)`.
* **Central Error Handler:** Mounted after all routes to process errors.

## 🏗️ Project Structure
* [`../backend/src/utils/asyncHandler.js`](../backend/src/utils/asyncHandler.js)
* [`../backend/src/middleware/errorHandler.js`](../backend/src/middleware/errorHandler.js)
* [`../backend/src/controllers/userController.js`](../backend/src/controllers/userController.js)

## ⚙️ Installation / Setup
No extra packages required.

## 💻 Step-by-Step Coding

### Step 1: Create `asyncHandler` Utility (`backend/src/utils/asyncHandler.js`)
```javascript
export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
```

### Step 2: Build Centralized Error Handler (`backend/src/middleware/errorHandler.js`)
```javascript
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message || 'Internal Server Error';

    if (err.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid ObjectId format';
    }

    if (err.code === 11000) {
        statusCode = 400;
        message = 'Duplicate field value entered';
    }

    res.status(statusCode).json({ success: false, message });
};

export default errorHandler;
```

### Step 3: Wrap Controllers in `asyncHandler` (`backend/src/controllers/userController.js`)
```javascript
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password');
    res.status(200).json({ success: true, data: users });
});
```

## 🧪 API / Application Testing
Send GET request to invalid ID `http://localhost:8000/api/users/invalid_id`.
Verify error handler returns `400 Bad Request` with `"Invalid ObjectId format"`.

## 🔬 Practical Lab
Wrap all controller methods in `productController.js` and `schoolController.js` with `asyncHandler`.

## ✅ Expected Result
Unhandled errors automatically pass to `errorHandler` without server crashes.

## ⚠️ Common Errors
* Middleware ignored: Mounting `errorHandler` BEFORE route definitions instead of AFTER routes in `server.js`.

## 🔧 Troubleshooting
Ensure error middleware function signature declares 4 arguments `(err, req, res, next)`. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Add custom handling for `ValidationError` in `errorHandler.js`.

## 📦 Daily Deliverable
Clean MVC architecture with `asyncHandler` and centralized error middleware.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
