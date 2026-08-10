# Day 15 — Full Integration & Production Build Compilation

## 🎯 Learning Objectives
* Connect all frontend and backend services for end-to-end full-stack integration.
* Compile an optimized React production build bundle using Vite (`npm run build`).
* Configure production environment variables (`.env`).
* Verify zero console errors, broken imports, or missing dependencies.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 14](./day-14.md).

## 🧠 Theory
Production builds minify JavaScript source code, strip development warning overhead, optimize asset sizes via tree shaking, and output static files inside `dist/` ready for global CDN distribution.

## 🔑 Key Concepts
* **Minification:** Compression removing whitespace, comments, and shortening variable identifiers.
* **Tree Shaking:** Eliminating unused JavaScript module imports.
* **`dist/` Directory:** Destination folder storing production static assets.

## 🏗️ Project Structure
* [`../frontend/vite.config.js`](../frontend/vite.config.js)
* [`../frontend/package.json`](../frontend/package.json)

## ⚙️ Installation / Setup
No extra packages required.

## 💻 Step-by-Step Coding

### Step 1: Verify Production Scripts (`frontend/package.json`)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Step 2: Compile Production Bundle
Inside `frontend/`, run:
```bash
npm run build
```

### Step 3: Test Production Preview
Inside `frontend/`, run:
```bash
npm run preview
```
Open `http://localhost:4173` to test the production bundle locally.

## 🧪 API / Application Testing
Verify `dist/index.html` and static JS bundle assets compile cleanly in `frontend/dist/`.

## 🔬 Practical Lab
Test user registration, login, and full CRUD creation in the compiled production preview server.

## ✅ Expected Result
Terminal outputs clean build assets (`dist/index.html`, `dist/assets/index-xxx.js`) built in under 2 seconds.

## ⚠️ Common Errors
* `'vite' is not recognized`: Missing `node_modules` in `frontend/`.

## 🔧 Troubleshooting
Run `npm install` inside `frontend/` before executing build. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Inspect minified JavaScript bundles in `frontend/dist/assets/`.

## 📦 Daily Deliverable
Compiled production build bundle verified clean with zero compilation errors.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
