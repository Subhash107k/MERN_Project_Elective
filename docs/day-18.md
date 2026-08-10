# Day 18 — Performance Optimization, React Code-Splitting & CI/CD [Advanced Extension / Planned Feature]

## 🎯 Learning Objectives
* Optimize MongoDB database queries using compound indexes (`userSchema.index`).
* Implement React code-splitting (`React.lazy`, `<Suspense>`) to reduce initial bundle sizes.
* Configure production environment variables for cloud deployment (Render, Vercel, Netlify).
* Create automated GitHub Actions CI/CD workflow pipelines (`.github/workflows/ci.yml`).

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 15](./day-15.md).

## 🧠 Theory
> **Note:** This module represents an *Advanced Extension / Planned Feature*. The baseline project runs automated test runners locally via `npm test`. Today's guide demonstrates how to configure database indexing, lazy code-splitting, and GitHub Actions CI pipelines.

Performance optimization involves reducing database query times via B-Tree indexing and shrinking initial client JavaScript downloads through lazy code-splitting. Automated CI/CD pipelines execute tests automatically on every Git push.

## 🔑 Key Concepts
* **Database Indexing:** B-Tree structures accelerating document lookups from `O(N)` scans to `O(log N)` index searches.
* **React Code-Splitting (`React.lazy`):** Loading page bundles on demand as users navigate routes.
* **CI/CD Pipeline:** Automated runner building assets and running test suites on code commits.

## 🏗️ Project Structure
* [`../backend/src/schemas/userSchema.js`](../backend/src/schemas/userSchema.js)
* [`../frontend/src/routes/AppRoutes.jsx`](../frontend/src/routes/AppRoutes.jsx)
* [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)

## ⚙️ Installation / Setup
No new npm packages required. GitHub Actions runner requires pushing code to a remote GitHub repository.

## 💻 Step-by-Step Coding

### Step 1: Add Schema Index (`backend/src/schemas/userSchema.js`)
```javascript
userSchema.index({ email: 1, role: 1 });
```

### Step 2: Implement React Code-Splitting (`frontend/src/routes/AppRoutes.jsx`)
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

### Step 3: Create GitHub Actions Workflow (`.github/workflows/ci.yml`)
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

## 🧪 API / Application Testing
Push code to GitHub and observe the GitHub Actions tab executing automated CI tests.

## 🔬 Practical Lab
Inspect browser DevTools Network tab to verify dynamic chunk JS loading on route navigation.

## ✅ Expected Result
Optimized database query performance, reduced initial client bundle size, and automated GitHub CI testing.

## ⚠️ Common Errors
* `ChunkLoadError`: Incorrect relative module path inside `lazy(() => import(...))`.

## 🔧 Troubleshooting
Ensure all lazy-loaded paths are accurate. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Add index `productSchema.index({ name: 1 })` to accelerate product catalog searches.

## 📦 Daily Deliverable
Performance optimizations and GitHub Actions CI workflow pipeline configuration.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
