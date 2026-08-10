# Day 07 — React & Vite Setup

## 🎯 What Was Learned
* Understood Single Page Application (SPA) frontend architecture.
* Initialized a React 18 application using Vite 6 (`npm create vite@latest`).
* Constructed JSX syntax and functional React components.
* Managed dynamic component state using the `useState` hook.

## 🧠 Theory & Concepts
React is a component-based JavaScript library for building interactive user interfaces. Vite is a modern frontend build tool leveraging native browser ES Modules for near-instant dev server startup and Hot Module Replacement (HMR).

## 🔑 Key Takeaways
* **JSX:** Extension allowing HTML-like syntax inside JavaScript files.
* **Component:** Independent, reusable functional UI blocks.
* **Props:** Read-only inputs passed from parent components to child components.
* **`useState` Hook:** React hook managing local reactive component state (`const [count, setCount] = useState(0)`).

## 🏗️ Project Structure
* [`../frontend/package.json`](../frontend/package.json)
* [`../frontend/vite.config.js`](../frontend/vite.config.js)
* [`../frontend/src/main.jsx`](../frontend/src/main.jsx)
* [`../frontend/src/App.jsx`](../frontend/src/App.jsx)
* [`../frontend/src/components/Button.jsx`](../frontend/src/components/Button.jsx)

## ⚙️ Setup & Configuration
Installed dependencies inside `frontend/`:
```bash
cd frontend
npm install
```

## 💻 Implementation

### Step 1: Created Reusable `<Button />` Component (`frontend/src/components/Button.jsx`)
```jsx
import React from 'react';

const Button = ({ children, type = 'button', variant = 'primary', onClick }) => {
    return (
        <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
            {children}
        </button>
    );
};

export default Button;
```

### Step 2: Utilized State in Main App Component (`frontend/src/App.jsx`)
```jsx
import React, { useState } from 'react';
import Button from './components/Button';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Counter: {count}</h1>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
    );
};

export default App;
```

## 🧪 Testing & Verification
Launched Vite development server:
```bash
npm run dev
```
Opened `http://localhost:5173/` in browser and verified state updates on button click.

## 🔬 Practical Work
Constructed reusable `<Card />` component in `frontend/src/components/Card.jsx`.

## ✅ What Was Completed
* Configured Vite + React 18 development environment.
* Created functional components and passed props.
* Managed reactive state using `useState`.

## ⚠️ Problems Encountered
* `'vite' is not recognized as an internal command`: Occurred when `node_modules` was missing in `frontend/`.

## 🔧 Troubleshooting & Fixes
Ran `npm install` inside `frontend/`. Refer to [Installation Guide](./installation.md).

## 📝 Additional Practice
Added Decrement and Reset button controls to `App.jsx`.

## 📦 Day Deliverable
Functional React SPA with reusable components, props, and `useState`.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Dev server executed successfully
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
