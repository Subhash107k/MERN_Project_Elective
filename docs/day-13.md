# Day 13 — JWT & Protected API Routes

## Learning Objectives
* Understand JSON Web Token (JWT) stateless authentication architecture.
* Issue signed JWT access tokens on login and registration (`jwt.sign()`).
* Build Express authentication middleware (`protect`) to verify `Authorization: Bearer <token>` headers.
* Protect private REST endpoints and build global React AuthContext state.

## What We Learn
Today we implement stateless token authentication. We learn how server applications sign digital JWT tokens containing user IDs, how clients send tokens in HTTP headers, and how protection middleware guards private endpoints.

## Why We Learn It
Stateful session memory scales poorly across distributed servers. JWT tokens provide stateless, scalable security verification for modern web and mobile applications.

## Important Concepts
* **JWT Structure:** Composed of 3 dot-separated base64 parts: Header, Payload (claims like user ID), and Signature.
* **Bearer Token:** Standard HTTP authorization header format: `Authorization: Bearer <token_string>`.
* **Auth Middleware (`protect`):** Express middleware decoding headers, verifying signature secret, and attaching `req.user`.

## Project Files
* [`backend/src/middleware/authMiddleware.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/middleware/authMiddleware.js)
* [`frontend/src/context/AuthContext.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/context/AuthContext.jsx)
* [`frontend/src/services/api.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/services/api.js)

## Step-by-Step Explanation
1. Sign token on login: `jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })`.
2. Attach token to user response JSON.
3. Build `protect` middleware extracting `req.headers.authorization`.
4. Configure Axios request interceptor in `services/api.js` to automatically attach token.
5. Create React `AuthContext` to store logged-in user state in `localStorage`.

## Code Examples
```javascript
// Express JWT Verification Middleware
import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token invalid' });
    }
};
```

## Practical Exercise
1. Register/Login on React app (`http://localhost:5173/login`).
2. Verify in browser dev tools -> Application -> Local Storage that `user` object containing `token` is stored.
3. Inspect Navbar to confirm that your user name and Logout button appear.

## Common Errors
* **`JsonWebTokenError: invalid signature`**: The secret key used to verify the token does not match the key used to sign it. Check `JWT_SECRET` in `.env`.

## How to Debug
Decode token payloads on `jwt.io` to inspect claim expiration timestamps and user ID properties.

## Homework
Mount `protect` middleware on `POST /api/products` route so only logged-in users can create new products.

## Expected Result
Authenticated users access protected API routes seamlessly using JWT authorization headers.

## Interview Questions
1. *What are the three components of a JSON Web Token (JWT)?*
2. *Why should sensitive data like passwords never be placed inside a JWT payload?*

## Day Summary
You have built stateless JWT authentication, protected Express API endpoints, and integrated global React AuthContext session state.
