# Day 13 — JWT Authentication & Protected Routes

## 🎯 Learning Objectives
* Understand stateless JSON Web Token (JWT) authorization architecture.
* Generate signed JWT access tokens (`jwt.sign`) upon user login/registration.
* Build Express `protect` middleware verifying `Authorization: Bearer <token>` headers.
* Build global React `AuthContext` managing authentication state and `localStorage` persistence.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 12](./day-12.md).

## 🧠 Theory
JWT is a stateless token format containing Header, Payload (user ID), and Signature. Servers verify signatures using a secret key (`JWT_SECRET`) without needing server session database lookups.

## 🔑 Key Concepts
* **JWT Token (`jwt.sign()`):** Cryptographically signed access token.
* **Bearer Token:** Standard HTTP header (`Authorization: Bearer <token>`).
* **`protect` Middleware:** Intercepts requests, decodes tokens, and attaches `req.user`.

## 🏗️ Project Structure
* [`../backend/src/middleware/authMiddleware.js`](../backend/src/middleware/authMiddleware.js)
* [`../backend/src/controllers/authController.js`](../backend/src/controllers/authController.js)
* [`../frontend/src/context/AuthContext.jsx`](../frontend/src/context/AuthContext.jsx)

## ⚙️ Installation / Setup
Inside `backend/`:
```bash
npm install jsonwebtoken
```

## 💻 Step-by-Step Coding

### Step 1: Create `protect` Bearer Middleware (`backend/src/middleware/authMiddleware.js`)
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

## 🧪 API / Application Testing
1. Send `POST /api/auth/login` in Postman. Copy token string.
2. Send `GET /api/auth/me` with header `Authorization: Bearer <token>`. Verify HTTP 200 response.

## 🔬 Practical Lab
Protect `DELETE /api/users/:id` route using `protect` middleware in `userRoutes.js`.

## ✅ Expected Result
Login returns signed JWT token, enabling access to protected endpoints.

## ⚠️ Common Errors
* `JsonWebTokenError: invalid signature`: `JWT_SECRET` mismatch between signing and verification.

## 🔧 Troubleshooting
Verify `JWT_SECRET` exists in `backend/.env`. Refer to [API Testing Guide](./api-testing.md).

## 📝 Practice Exercise
Implement `logout()` method in `AuthContext.jsx` clearing token from `localStorage`.

## 📦 Daily Deliverable
Stateless JWT authentication pipeline and protected API routes.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
