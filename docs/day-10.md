# Day 10 — Full-Stack Integration with Axios API Layer

## 🎯 What Was Learned
* Configured an Axios client instance with base URL settings (`VITE_API_URL`).
* Understood CORS (Cross-Origin Resource Sharing) between frontend (5173) and backend (8000).
* Sent asynchronous HTTP POST requests from React forms to Express API routes.
* Handled API success and error banners gracefully in the UI.

## 🧠 Theory & Concepts
Axios is a Promise-based HTTP client. Configuring a centralized Axios service layer (`services/api.js`) centralizes base API URLs and request/response headers across the entire React frontend application.

## 🔑 Key Takeaways
* **Axios Instance (`axios.create()`):** Pre-configured HTTP client instance.
* **Base URL (`import.meta.env.VITE_API_URL`):** Dynamically bound API path prefix (`http://localhost:8000/api`).
* **CORS:** Backend security header allowing requests from `http://localhost:5173`.

## 🏗️ Project Structure
* [`../frontend/src/services/api.js`](../frontend/src/services/api.js)
* [`../frontend/.env`](../frontend/.env)

## ⚙️ Setup & Configuration
Installed Axios dependency inside `frontend/`:
```bash
cd frontend
npm install axios
```

## 💻 Implementation

### Step 1: Created Centralized Axios Client (`frontend/src/services/api.js`)
```javascript
import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
});

export const getUsersApi = () => API.get('/users');
export const createUserApi = (data) => API.post('/users', data);

export default API;
```

### Step 2: Connected `CreateUser.jsx` to Axios Service (`frontend/src/pages/users/CreateUser.jsx`)
```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserApi } from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserApi({ name, email, password, address, phone });
            navigate('/users');
        } catch (err) {
            alert(err.response?.data?.message || 'Create user failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Input label="Address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <Input label="Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <Button type="submit">Submit Account</Button>
        </form>
    );
};

export default CreateUser;
```

## 🧪 Testing & Verification
Submitted form in React app. Opened browser Network tab (`F12` -> Network) and verified `POST http://localhost:8000/api/users` returned HTTP 201 Created.

## 🔬 Practical Work
Connected product creation form (`CreateProduct.jsx`) to `createProductApi(data)`.

## ✅ What Was Completed
* Built centralized Axios service client.
* Handled CORS policies between ports 5173 and 8000.
* Posted React form inputs directly into MongoDB.

## ⚠️ Problems Encountered
* `CORS Error`: Occurred when Express backend was missing `app.use(cors())` middleware.

## 🔧 Troubleshooting & Fixes
Verified `CLIENT_URL` in `backend/.env` permitted `http://localhost:5173`. Refer to [Installation Guide](./installation.md).

## 📝 Additional Practice
Added loading state (`const [loading, setLoading] = useState(false)`) disabling submit button while HTTP request is in-flight.

## 📦 Day Deliverable
Connected full-stack architecture posting React form inputs directly to MongoDB over HTTP.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] API integration verified
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
