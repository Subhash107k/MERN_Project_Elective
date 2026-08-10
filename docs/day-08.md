# Day 08 — Client-Side Navigation with React Router v6

## 🎯 What Was Learned
* Understood Single Page Application (SPA) client-side routing concepts.
* Configured `react-router-dom` v6 (`BrowserRouter`, `Routes`, `Route`).
* Implemented navigation bars using `<NavLink>` to prevent full browser page reloads.
* Extracted dynamic URL parameters using the `useParams()` hook.

## 🧠 Theory & Concepts
Client-side routing intercepts URL address bar changes in JavaScript, swapping active React DOM components without requesting new HTML documents from web servers.

## 🔑 Key Takeaways
* **`<BrowserRouter>`:** Top-level history wrapper for React apps.
* **`<Routes>` & `<Route>`:** Component path matcher (`<Route path="/users" element={<UserList />} />`).
* **`<NavLink>`:** Link element providing active CSS state styling.
* **`useParams()` Hook:** Extracts dynamic path parameters (`:id`).

## 🏗️ Project Structure
* [`../frontend/src/routes/AppRoutes.jsx`](../frontend/src/routes/AppRoutes.jsx)
* [`../frontend/src/components/Navbar.jsx`](../frontend/src/components/Navbar.jsx)

## ⚙️ Setup & Configuration
Installed `react-router-dom` inside `frontend/`:
```bash
cd frontend
npm install react-router-dom
```

## 💻 Implementation

### Step 1: Wrapped App in `<BrowserRouter>` (`frontend/src/main.jsx`)
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

### Step 2: Defined Application Routes (`frontend/src/routes/AppRoutes.jsx`)
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

### Step 3: Constructed Navigation Bar (`frontend/src/components/Navbar.jsx`)
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

## 🧪 Testing & Verification
Clicked Navbar navigation links and verified browser address bar changed without page reloads.

## 🔬 Practical Work
Constructed dynamic route `/users/:id` rendering `UserDetail.jsx` and extracted `id` parameter via `useParams()`.

## ✅ What Was Completed
* Configured React Router v6 client routing.
* Built header `<Navbar />` with active link indicators.
* Tested SPA navigation transitions.

## ⚠️ Problems Encountered
* `<routes>` is not defined error: Caused by importing lowercase `{ routes }` instead of capitalized `{ Routes }`.

## 🔧 Troubleshooting & Fixes
Ensured `<BrowserRouter>` wrapped `<App />` in `main.jsx` and capitalized `{ Routes }`. Refer to [Architecture Guide](./architecture.md).

## 📝 Additional Practice
Added a catch-all fallback route `<Route path="*" element={<Home />} />`.

## 📦 Day Deliverable
Multi-page React SPA with dynamic routing and navigation headers.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Router navigation verified
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
