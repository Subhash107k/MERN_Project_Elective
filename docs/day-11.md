# Day 11 — Fetching & Rendering Database Lists with `useEffect`

## 🎯 What Was Learned
* Used the React `useEffect` hook to fetch database records on component mounting.
* Rendered arrays of database documents into HTML tables using JavaScript `.map()`.
* Assigned unique `key` props to iterated JSX list elements.
* Implemented UI loading spinners (`<Loading />`) and delete triggers.

## 🧠 Theory & Concepts
`useEffect(effectFn, [])` executes side effects (such as fetching data over HTTP) after React mounts components to the DOM. JavaScript `.map()` projects data array objects into rendered JSX table row components.

## 🔑 Key Takeaways
* **`useEffect` Hook:** Manages asynchronous component side effects.
* **Empty Dependency Array `[]`:** Ensures effect runs once on initial component mounting.
* **`key={item._id}`:** React virtual DOM identifier tracking element updates and deletions.

## 🏗️ Project Structure
* [`../frontend/src/pages/users/UserList.jsx`](../frontend/src/pages/users/UserList.jsx)
* [`../frontend/src/components/Table.jsx`](../frontend/src/components/Table.jsx)

## ⚙️ Setup & Configuration
No additional npm dependencies required.

## 💻 Implementation

### Step 1: Built Table Component (`frontend/src/components/Table.jsx`)
```jsx
import React from 'react';

const Table = ({ headers, children }) => (
    <table className="table">
        <thead>
            <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>{children}</tbody>
    </table>
);

export default Table;
```

### Step 2: Fetched and Rendered User List (`frontend/src/pages/users/UserList.jsx`)
```jsx
import React, { useEffect, useState } from 'react';
import { getUsersApi, deleteUserApi } from '../../services/api';
import Table from '../../components/Table';
import Button from '../../components/Button';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await getUsersApi();
        setUsers(res.data.data || []);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Delete user?')) return;
        await deleteUserApi(id);
        setUsers(users.filter(u => u._id !== id));
    };

    return (
        <Table headers={['Name', 'Email', 'Address', 'Phone', 'Actions']}>
            {users.map(u => (
                <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.address}</td>
                    <td>{u.phone}</td>
                    <td><Button onClick={() => handleDelete(u._id)}>Delete</Button></td>
                </tr>
            ))}
        </Table>
    );
};

export default UserList;
```

## 🧪 Testing & Verification
Navigated to `/users` in browser. Verified users stored in MongoDB rendered cleanly in the HTML table.

## 🔬 Practical Work
Built `ProductList.jsx` and `SchoolList.jsx` to render product catalog and school directory records.

## ✅ What Was Completed
* Fetched database lists on component mounting via `useEffect`.
* Rendered formatted HTML data tables using `.map()`.
* Implemented real-time row deletion triggers.

## ⚠️ Problems Encountered
* Infinite HTTP request loop: Occurred when calling state setters inside `useEffect` without providing `[]` dependency array.

## 🔧 Troubleshooting & Fixes
Ensured dependency array `[]` was provided as second parameter to `useEffect`. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Additional Practice
Added empty state fallback (`<p>No user records found</p>`) when array length was 0.

## 📦 Day Deliverable
Formatted database list tables with dynamic fetch and delete triggers.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] List rendering verified
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
