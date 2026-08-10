# Day 18 — Performance Optimization, React Code-Splitting & CI/CD [Advanced Extension / Planned Feature]

## 🎯 What Was Learned
* Optimized MongoDB database queries using compound indexes (`userSchema.index`).
* Implemented React code-splitting (`React.lazy`, `<Suspense>`) to reduce initial bundle sizes.
* Configured production environment variables for cloud deployment (Render, Vercel, Netlify).
* Created automated GitHub Actions CI/CD workflow pipelines (`.github/workflows/ci.yml`).

## 🧠 Theory & Concepts
> **Note:** This module represents an *Advanced Extension / Planned Feature*. The baseline project runs automated test runners locally via `npm test`. Today's notes document how to configure database indexing, lazy code-splitting, and GitHub Actions CI pipelines.

Performance optimization involves reducing database query times via B-Tree indexing and shrinking initial client JavaScript downloads through lazy code-splitting. Automated CI/CD pipelines execute tests automatically on every Git push.

## 🔑 Key Takeaways
* **Database Indexing:** B-Tree structures accelerating document lookups from `O(N)` scans to `O(log N)` index searches.
* **React Code-Splitting (`React.lazy`):** Loading page bundles on demand as users navigate routes.
* **CI/CD Pipeline:** Automated runner building assets and running test suites on code commits.

## 🏗️ Project Structure
* [`../backend/src/schemas/userSchema.js`](../backend/src/schemas/userSchema.js)
* [`../frontend/src/routes/AppRoutes.jsx`](../frontend/src/routes/AppRoutes.jsx)
* [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)

## ⚙️ Setup & Configuration
No new npm packages required. GitHub Actions runner requires pushing code to a remote GitHub repository.

## 💻 Implementation

### Step 1: Added Schema Index (`backend/src/schemas/userSchema.js`)
```javascript
userSchema.index({ email: 1, role: 1 });
```

### Step 2: Implemented React Code-Splitting (`frontend/src/routes/AppRoutes.jsx`)
```jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = lazy(() => import('../pages/Home'));
const UserList = lazy(() => import('../pages/users/UserList'));

const AppRoutes = () => (
    <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
```

### Step 3: Created GitHub Actions Workflow (`.github/workflows/ci.yml`)
```yaml
name: MERN Course CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: cd backend && npm install && npm test
      - run: cd frontend && npm install && npm run build
```

## 🧪 Testing & Verification
Pushed code to GitHub and observed GitHub Actions tab executing automated CI tests.

## 🔬 Practical Work
Inspected browser DevTools Network tab to verify dynamic chunk JS loading on route navigation.

## ✅ What Was Completed
* Added compound indexes to Mongoose schemas.
* Configured React lazy route code-splitting.
* Created GitHub Actions automated CI testing workflow pipeline.

## ⚠️ Problems Encountered
* `ChunkLoadError`: Occurred when relative module path was incorrect inside `lazy(() => import(...))`.

## 🔧 Troubleshooting & Fixes
Ensured all lazy-loaded relative paths were accurate. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Additional Practice
Add index `productSchema.index({ name: 1 })` to accelerate product catalog searches.

## 📦 Day Deliverable
Performance optimizations and GitHub Actions CI workflow pipeline configuration.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Optimization verified
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
