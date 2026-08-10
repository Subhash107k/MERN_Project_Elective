# Day 7 — React & Vite Setup

## Learning Objectives
* Understand React single-page application (SPA) architecture.
* Initialize a lightweight React project using Vite (`npm create vite@latest`).
* Learn JSX syntax, component composition, props, and state (`useState`).
* Structure a clean frontend directory hierarchy (`components/`, `pages/`, `styles/`).

## What We Learn
Today we switch to frontend development. We set up a modern React application with Vite HMR (Hot Module Replacement), explore JSX template rendering, and manage component state using React hooks.

## Why We Learn It
Vite provides instant dev server startup and lightning-fast builds compared to legacy tools. Understanding React components prepares us for building dynamic client user interfaces.

## Important Concepts
* **JSX (JavaScript XML):** Syntax extension allowing HTML-like markup directly inside JavaScript files.
* **Component:** Reusable UI building block returning JSX elements.
* **`useState` Hook:** React hook enabling functional components to declare and update local state variables.

## Project Files
* [`frontend/package.json`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/package.json)
* [`frontend/src/main.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/main.jsx)
* [`frontend/src/App.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/App.jsx)

## Step-by-Step Explanation
1. Open terminal and navigate to `frontend/`.
2. Run `npm install` to install React, React DOM, and Vite dependencies.
3. Run `npm run dev` to launch the Vite local development server (`http://localhost:5173`).
4. Inspect `main.jsx` rendering `<App />` into the DOM root element (`#root`).

## Code Examples
```jsx
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    );
};
```

## Practical Exercise
1. Create a `Button.jsx` component inside `frontend/src/components/`.
2. Pass `variant` and `children` props to customize button styling.
3. Import and render the button inside `App.jsx`.

## Common Errors
* **`Uncaught ReferenceError: React is not defined`**: Happens in older React setups. Ensure modern JSX transform or React import is active.

## How to Debug
Use browser developer tools (F12 inspect element -> Console tab) to catch client rendering runtime errors.

## Homework
Create a `Card.jsx` component that accepts `title` and `children` props and renders a styled white container.

## Expected Result
Browser opens `http://localhost:5173` showing clean React component rendering with instant HMR updates on file save.

## Interview Questions
1. *What is the difference between props and state in React?*
2. *Why is Vite significantly faster than traditional webpack dev servers?*

## Day Summary
You have initialized a Vite + React SPA environment and mastered basic component composition and state management.
