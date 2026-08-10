# Day 8 — Client-Side SPA Navigation with React Router v6

## Learning Objectives
* Understand Single Page Application (SPA) client-side routing concepts.
* Install and configure `react-router-dom` v6 (`BrowserRouter`, `Routes`, `Route`).
* Create clean navigation bars using `<NavLink>` to prevent full browser page reloads.
* Handle dynamic URL path parameters using the `useParams()` hook.

## What We Learn
Today we build multi-page navigation without server-side page reloads. We configure a central route table (`AppRoutes.jsx`), map client URL paths to page components, and build a navigation header (`Navbar.jsx`).

## Why We Learn It
Traditional multi-page websites reload the entire HTML document on every link click. React Router enables instant client-side page transitions while preserving app state.

## Important Concepts
* **`<BrowserRouter>`:** Router provider syncing client UI views with browser URL history.
* **`<Routes>` & `<Route>`:** Component container mapping specific path strings (`/users`) to React components (`<UserList />`).
* **`useParams()`:** React Router hook extracting dynamic URL parameter strings (e.g. `:id`).

## Project Files
* [`frontend/src/routes/AppRoutes.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/routes/AppRoutes.jsx)
* [`frontend/src/components/Navbar.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/components/Navbar.jsx)

## Step-by-Step Explanation
1. Wrap `<App />` inside `<BrowserRouter>` in `main.jsx`.
2. Define route declarations in `routes/AppRoutes.jsx`.
3. Create `<Navbar />` with `<NavLink to="/users">Users</NavLink>`.
4. Implement dynamic route `/users/:id` mapped to `<UserDetail />`.

## Code Examples
```jsx
import { Routes, Route, useParams } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();
    return <h2>Viewing User Profile: {id}</h2>;
};

const AppRoutes = () => (
    <Routes>
        <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
);
```

## Practical Exercise
1. Launch frontend dev server: `npm run dev`.
2. Click on the Navbar links (`/`, `/users`, `/products`, `/schools`).
3. Verify that the URL updates and the component changes instantly without refreshing the page browser tab.

## Common Errors
* **`<routes>` is not recognized / invalid JSX**: Caused by importing lowercase `routes` instead of capitalized `Routes` from `react-router-dom`.

## How to Debug
Ensure all React Router tags use proper uppercase naming (`<Routes>`, `<Route>`) and that all routes are enclosed within `<BrowserRouter>`.

## Homework
Add a fallback catch-all route (`<Route path="*" element={<NotFound />} />`) for unmatched client URLs.

## Expected Result
Smooth client-side navigation between pages with active state link highlighting in Navbar.

## Interview Questions
1. *How does React Router achieve client-side page navigation without triggering a browser refresh?*
2. *What is the difference between `<Link>` and `<NavLink>` in React Router DOM?*

## Day Summary
You have configured multi-page client-side SPA routing and dynamic parameter navigation with React Router v6.
