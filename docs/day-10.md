# Day 10 — Full-Stack Integration with Axios API Layer

## 🎯 Learning Objectives
* Configure an Axios instance with base URL settings (`VITE_API_URL`).
* Understand CORS (Cross-Origin Resource Sharing) between frontend (5173) and backend (8000).
* Send asynchronous HTTP POST requests from React forms to Express API routes.
* Handle API success and error banners gracefully in the UI.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 09](./day-09.md).
* Backend API server running on `http://localhost:8000`.

## 🧠 Theory
Axios is a Promise-based HTTP client. Configuring a centralized Axios service layer (`services/api.js`) centralizes base API URLs and request/response interceptors across the entire React frontend application.

## 🔑 Key Concepts
* **Axios Instance (`axios.create()`):** Pre-configured HTTP client instance.
* **Base URL (`import.meta.env.VITE_API_URL`):** Dynamically bound API path prefix (`http://localhost:8000/api`).
* **CORS:** Backend security header allowing requests from `http://localhost:5173`.

## 🏗️ Project Structure
* [`../frontend/src/services/api.js`](../frontend/src/services/api.js)
* [`../frontend/.env`](../frontend/.env)

## ⚙️ Installation / Setup
Inside `frontend/`:
```bash
npm install axios
```

## 💻 Step-by-Step Coding

### Step 1: Create Centralized Axios Client (`frontend/src/services/api.js`)
```javascript
import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
});

export const getUsersApi = () => API.get('/users');
export const createUserApi = (data) => API.post('/users', data);

export default API;
```

### Step 2: Connect `CreateUser.jsx` to Axios Service (`frontend/src/pages/users/CreateUser.jsx`)
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

## 🧪 API / Application Testing
Submit form in React app. Open browser network tab (`F12` -> Network) and verify `POST http://localhost:8000/api/users` returns HTTP 201 Created.

## 🔬 Practical Lab
Connect product creation form (`CreateProduct.jsx`) to `createProductApi(data)`.

## ✅ Expected Result
React form posts data to backend server, inserts document into MongoDB, and redirects to `/users`.

## ⚠️ Common Errors
* `CORS Error`: Express missing `app.use(cors())` middleware.

## 🔧 Troubleshooting
Verify `CLIENT_URL` in `backend/.env` permits `http://localhost:5173`. Refer to [Installation Guide](./installation.md).

## 📝 Practice Exercise
Add loading state (`const [loading, setLoading] = useState(false)`) disabling submit button while HTTP request is in-flight.

## 📦 Daily Deliverable
Connected full-stack architecture posting React form inputs directly to MongoDB.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
