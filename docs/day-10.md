# Day 10 — Full-Stack Integration with Axios & CORS

## Learning Objectives
* Connect React frontend components to Express backend API endpoints using Axios.
* Configure Cross-Origin Resource Sharing (CORS) on Express server.
* Build a centralized Axios service layer (`services/api.js`).
* Manage asynchronous request lifecycle states (`loading`, `success`, `error`).

## What We Learn
Today we connect the React client to the Node server. We learn how Axios executes asynchronous HTTP requests (`API.post()`, `API.get()`), how CORS headers authorize cross-origin browser requests, and how loading spinners communicate network states.

## Why We Learn It
Scattering raw `fetch` calls across components creates duplicated code and inconsistent error handling. A centralized Axios service layer organizes API endpoint definitions in one location.

## Important Concepts
* **Axios Instance:** Pre-configured HTTP client storing `baseURL` and global headers.
* **CORS (Cross-Origin Resource Sharing):** Browser security mechanism allowing client apps (`localhost:5173`) to request resources from servers (`localhost:8000`).
* **Async Request States:** Managing `loading` boolean state and `error` string banners during HTTP calls.

## Project Files
* [`frontend/src/services/api.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/services/api.js)
* [`backend/src/server.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/server.js)
* [`frontend/src/pages/products/CreateProduct.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/pages/products/CreateProduct.jsx)

## Step-by-Step Explanation
1. Define Axios client instance in `services/api.js`: `const API = axios.create({ baseURL: ... });`.
2. Export API service functions: `export const createProductApi = (data) => API.post('/products', data);`.
3. Import service function in React component and invoke inside `handleSubmit`.
4. Wrap in `try...catch...finally` block to update loading and error states.

## Code Examples
```javascript
// Centralized Axios API Service
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

export const createUserApi = (userData) => API.post('/users', userData);
```

## Practical Exercise
1. Ensure Express backend is running on `http://localhost:8000`.
2. Open `CreateProduct.jsx` on frontend dev server (`http://localhost:5173/products/create`).
3. Fill out product fields (Name, Price, Quantity) and submit.
4. Verify that the product document is created in MongoDB database.

## Common Errors
* **`Access to XMLHttpRequest at 'http://localhost:8000/api' from origin 'http://localhost:5173' has been blocked by CORS policy`**: Express server is missing `app.use(cors())` middleware.

## How to Debug
Check browser developer tools Network tab -> response headers to verify `Access-Control-Allow-Origin` header presence.

## Homework
Connect `CreateSchool.jsx` form submission to `createSchoolApi()` service function.

## Expected Result
React form data successfully POSTs to Express backend API and persists in MongoDB database.

## Interview Questions
1. *What is a CORS preflight request (OPTIONS verb) and why does the browser send it?*
2. *What advantages does Axios offer over native browser `fetch()`?*

## Day Summary
You have connected React frontend components to Express backend APIs using a centralized Axios service layer.
