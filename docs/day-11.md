# Day 11 — Reading & Rendering Database Data in React

## Learning Objectives
* Fetch database records using the React `useEffect` hook.
* Render arrays of objects dynamically using JavaScript `.map()`.
* Handle unique key props (`key={item._id}`) when rendering lists.
* Build empty state containers, loading spinners, and item deletion handlers.

## What We Learn
Today we render database records in React components. We learn how `useEffect` executes data fetching on component mount, how `.map()` transforms array objects into JSX tables, and how UI lists update after record deletion.

## Why We Learn It
Displaying database data is a core requirement for web applications. Proper list rendering and state synchronization ensures user interface views reflect database changes.

## Important Concepts
* **`useEffect` Hook:** Executes side effects (such as HTTP data fetching) after component rendering.
* **Array `.map()`:** Method transforming document arrays into lists of JSX table rows or cards.
* **React `key` Prop:** Unique identifier (`key={user._id}`) assisting React Virtual DOM reconciliation.

## Project Files
* [`frontend/src/pages/users/UserList.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/pages/users/UserList.jsx)
* [`frontend/src/pages/products/ProductList.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/pages/products/ProductList.jsx)
* [`frontend/src/components/Table.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/components/Table.jsx)

## Step-by-Step Explanation
1. Declare list state: `const [users, setUsers] = useState([]);`.
2. Fetch data inside `useEffect`: `useEffect(() => { fetchUsers(); }, []);`.
3. Render data table using `.map()`: `users.map(u => <tr key={u._id}>...</tr>)`.
4. Add deletion handler that filters out deleted items from local state.

## Code Examples
```jsx
import React, { useEffect, useState } from 'react';
import { getUsersApi } from '../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsersApi().then(res => setUsers(res.data.data));
    }, []);

    return (
        <ul>
            {users.map(user => (
                <li key={user._id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    );
};
```

## Practical Exercise
1. Navigate to `http://localhost:5173/users`.
2. Verify that all user records stored in MongoDB display cleanly inside the data table.
3. Click the "Delete" button on a row and confirm that the item vanishes from UI immediately.

## Common Errors
* **`Warning: Each child in a list should have a unique "key" prop`**: Happens when `.map()` elements do not specify a unique `key={item._id}` attribute.

## How to Debug
Check browser developer tools Console for key warnings or inspect the Network tab response payload to verify array structure.

## Homework
Implement list rendering and item deletion inside `SchoolList.jsx`.

## Expected Result
Interactive React data tables displaying live database records with working view, edit, and delete actions.

## Interview Questions
1. *Why does React require a unique `key` prop when rendering array lists?*
2. *What happens if you omit the dependency array `[]` in a `useEffect` hook?*

## Day Summary
You have fetched database data using `useEffect` and rendered dynamic data tables using React array mapping.
