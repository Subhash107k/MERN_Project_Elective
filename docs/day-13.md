# Day 13 — JWT Authentication & Protected Routes

## 🎯 What Was Learned
* Understood stateless JSON Web Token (JWT) authorization architecture.
* Generated signed JWT access tokens (`jwt.sign`) upon user login/registration.
* Built Express `protect` middleware verifying `Authorization: Bearer <token>` headers.
* Built global React `AuthContext` managing authentication state and `localStorage` persistence.

## 🧠 Theory & Concepts
JWT is a stateless token format containing Header, Payload (user ID), and Signature. Servers verify signatures using a secret key (`JWT_SECRET`) without needing server session database lookups.

## 🔑 Key Takeaways
* **JWT Token (`jwt.sign()`):** Cryptographically signed access token.
* **Bearer Token:** Standard HTTP header (`Authorization: Bearer <token>`).
* **`protect` Middleware:** Intercepts requests, decodes tokens, and attaches `req.user`.

## 🏗️ Project Structure
* [`../backend/src/middleware/authMiddleware.js`](../backend/src/middleware/authMiddleware.js)
* [`../backend/src/controllers/authController.js`](../backend/src/controllers/authController.js)
* [`../frontend/src/context/AuthContext.jsx`](../frontend/src/context/AuthContext.jsx)

## ⚙️ Setup & Configuration
Installed `jsonwebtoken` dependency inside `backend/`:
```bash
cd backend
npm install jsonwebtoken
```

## 💻 Implementation

### Step 1: Created `protect` Bearer Middleware (`backend/src/middleware/authMiddleware.js`)
```javascript
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no bearer token');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = await User.findById(decoded.id).select('-password');
    next();
});
```

### Step 2: Auth Login Controller (`backend/src/controllers/authController.js`)
```javascript
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.matchPassword(password))) {
        res.status(401);
        throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.status(200).json({ success: true, data: { _id: user._id, name: user.name, email: user.email, token } });
});
```

## 🧪 Testing & Verification
1. Sent `POST /api/auth/login` in Postman. Copied token string.
2. Sent `GET /api/auth/me` with header `Authorization: Bearer <token>`. Verified HTTP 200 response.

## 🔬 Practical Work
Protected `DELETE /api/users/:id` route using `protect` middleware in `userRoutes.js`.

## ✅ What Was Completed
* Built JWT token generation and verification pipeline.
* Protected API endpoints using `protect` bearer middleware.
* Created global React `AuthContext` managing session persistence.

## ⚠️ Problems Encountered
* `JsonWebTokenError: invalid signature`: Occurred when `JWT_SECRET` mismatched between signing and verification.

## 🔧 Troubleshooting & Fixes
Verified `JWT_SECRET` existed in `backend/.env`. Refer to [API Testing Guide](./api-testing.md).

## 📝 Additional Practice
Implemented `logout()` method in `AuthContext.jsx` clearing token from `localStorage`.

## 📦 Day Deliverable
Stateless JWT authentication pipeline and protected API routes.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Authentication verified
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
