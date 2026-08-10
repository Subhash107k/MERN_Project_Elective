# Day 08 — Client-Side Navigation with React Router v6

## 🎯 Learning Objectives
* Understand Single Page Application (SPA) client-side routing concepts.
* Configure `react-router-dom` v6 (`BrowserRouter`, `Routes`, `Route`).
* Implement navigation bars using `<NavLink>` to prevent full browser page reloads.
* Extract dynamic URL parameters using the `useParams()` hook.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 07](./day-07.md).

## 🧠 Theory
Client-side routing intercepts URL address bar changes in JavaScript, swapping active React DOM components without requesting new HTML documents from web servers.

## 🔑 Key Concepts
* **`<BrowserRouter>`:** Top-level history wrapper for React apps.
* **`<Routes>` & `<Route>`:** Component path matcher (`<Route path="/users" element={<UserList />} />`).
* **`<NavLink>`:** Link element providing active CSS state styling.
* **`useParams()` Hook:** Extracts dynamic path parameters (`:id`).

## 🏗️ Project Structure
* [`../frontend/src/routes/AppRoutes.jsx`](../frontend/src/routes/AppRoutes.jsx)
* [`../frontend/src/components/Navbar.jsx`](../frontend/src/components/Navbar.jsx)

## ⚙️ Installation / Setup
Inside `frontend/`:
```bash
npm install react-router-dom
```

## 💻 Step-by-Step Coding

### Step 1: Wrap App in `<BrowserRouter>` (`frontend/src/main.jsx`)
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### Step 2: Define Routes (`frontend/src/routes/AppRoutes.jsx`)
```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserList from '../pages/users/UserList';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
    </Routes>
);

export default AppRoutes;
```

### Step 3: Build Navigation Bar (`frontend/src/components/Navbar.jsx`)
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink>
    </nav>
);

export default Navbar;
```

## 🧪 API / Application Testing
Click Navbar links and verify address bar changes while page remains un-refreshed.

## 🔬 Practical Lab
Add dynamic route `/users/:id` rendering `UserDetail.jsx` and extract `id` via `useParams()`.

## ✅ Expected Result
Seamless client-side page transitions with zero browser page reloads.

## ⚠️ Common Errors
* `<routes>` is not defined: Importing lowercase `{ routes }` instead of capitalized `{ Routes }`.

## 🔧 Troubleshooting
Ensure `<BrowserRouter>` wraps `<App />` in `main.jsx`. Refer to [Architecture Guide](./architecture.md).

## 📝 Practice Exercise
Add a catch-all fallback route `<Route path="*" element={<Home />} />`.

## 📦 Daily Deliverable
Multi-page React SPA with dynamic routing and navigation headers.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
