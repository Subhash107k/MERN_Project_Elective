# Day 06 — MVC Architecture & Centralized Error Middleware

## 🎯 What Was Learned
* Separated application concerns using Model-View-Controller (MVC) architecture.
* Implemented `asyncHandler` wrapper utility to eliminate repetitive `try...catch` blocks.
* Built centralized Express 4-parameter error handling middleware (`errorHandler.js`).
* Intercepted invalid ObjectIds (`CastError`) and duplicate keys (`11000`).

## 🧠 Theory & Concepts
The MVC pattern isolates data schemas (Model), UI interfaces (View), and HTTP request logic (Controller). Centralized Express error middleware (`(err, req, res, next)`) intercepts unhandled promise rejections, formatting clean JSON errors.

## 🔑 Key Takeaways
* **MVC Pattern:** Decoupling routes, business logic, and schemas.
* **`asyncHandler`:** Higher-order function wrapping async controllers in `Promise.resolve().catch(next)`.
* **Central Error Handler:** Mounted after all routes to process errors.

## 🏗️ Project Structure
* [`../backend/src/utils/asyncHandler.js`](../backend/src/utils/asyncHandler.js)
* [`../backend/src/middleware/errorHandler.js`](../backend/src/middleware/errorHandler.js)
* [`../backend/src/controllers/userController.js`](../backend/src/controllers/userController.js)

## ⚙️ Setup & Configuration
No additional npm dependencies required.

## 💻 Implementation

### Step 1: Created `asyncHandler` Utility (`backend/src/utils/asyncHandler.js`)
```javascript
export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
```

### Step 2: Built Centralized Error Handler (`backend/src/middleware/errorHandler.js`)
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

### Step 3: Wrapped Controllers in `asyncHandler` (`backend/src/controllers/userController.js`)
```javascript
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password');
    res.status(200).json({ success: true, data: users });
});
```

## 🧪 Testing & Verification
Sent GET request to invalid ID `http://localhost:8000/api/users/invalid_id`.
Verified error handler returned `400 Bad Request` with `"Invalid ObjectId format"`.

## 🔬 Practical Work
Wrapped all controller methods in `productController.js` and `schoolController.js` with `asyncHandler`.

## ✅ What Was Completed
* Decoupled controllers from route declarations.
* Implemented `asyncHandler` utility wrapper.
* Built centralized 4-parameter Express error middleware.

## ⚠️ Problems Encountered
* Error middleware ignored: Mounted `errorHandler` BEFORE route definitions instead of AFTER routes in `server.js`.

## 🔧 Troubleshooting & Fixes
Ensured error middleware function signature declared 4 arguments `(err, req, res, next)` and mounted after routes in `server.js`. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Additional Practice
Added custom handling for Mongoose `ValidationError` in `errorHandler.js`.

## 📦 Day Deliverable
Clean MVC architecture with `asyncHandler` and centralized error handling middleware.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Server executed successfully
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
