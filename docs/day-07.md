# Day 07 — React & Vite Setup

## 🎯 Learning Objectives
* Understand Single Page Application (SPA) frontend concepts.
* Initialize a lightweight React 18 project using Vite 6 (`npm create vite@latest`).
* Write JSX syntax and functional React components.
* Manage dynamic component state using the `useState` hook.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 06](./day-06.md).
* Node.js v18+ installed.

## 🧠 Theory
React is a component-driven JavaScript library for building interactive user interfaces. Vite is a modern frontend build tool leveraging native browser ES Modules for near-instant dev server startup and Hot Module Replacement (HMR).

## 🔑 Key Concepts
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

## ⚙️ Installation / Setup
Inside `frontend/`, install dependencies:
```bash
cd frontend
npm install
```

## 💻 Step-by-Step Coding

### Step 1: Create Reusable `<Button />` Component (`frontend/src/components/Button.jsx`)
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

### Step 2: Use State in Component (`frontend/src/App.jsx`)
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

## 🧪 API / Application Testing
Launch Vite dev server:
```bash
npm run dev
```
Open `http://localhost:5173/` in browser and test button click.

## 🔬 Practical Lab
Build a reusable `<Card />` component in `frontend/src/components/Card.jsx`.

## ✅ Expected Result
Browser renders interactive counter incrementing state dynamically without page reload.

## ⚠️ Common Errors
* `'vite' is not recognized as an internal command`: Missing `node_modules` in `frontend/`.

## 🔧 Troubleshooting
Run `npm install` inside `frontend/`. Refer to [Installation Guide](./installation.md).

## 📝 Practice Exercise
Add Decrement and Reset buttons to `App.jsx`.

## 📦 Daily Deliverable
Functional React application with components, props, and `useState`.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
