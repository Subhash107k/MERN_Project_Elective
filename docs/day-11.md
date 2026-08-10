# Day 11 — Fetching & Rendering Database Lists with `useEffect`

## 🎯 Learning Objectives
* Use the React `useEffect` hook to fetch data on component mounting.
* Render arrays of database documents into HTML tables using JavaScript `.map()`.
* Assign unique `key` props to iterated JSX list elements.
* Implement UI loading spinners (`<Loading />`) and delete triggers.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 10](./day-10.md).

## 🧠 Theory
`useEffect(effectFn, [])` executes side effects (such as fetching data over HTTP) after React mounts components to the DOM. JavaScript `.map()` projects data array objects into rendered JSX table row components.

## 🔑 Key Concepts
* **`useEffect` Hook:** Manages asynchronous component side effects.
* **Empty Dependency Array `[]`:** Ensures effect runs once on initial component mounting.
* **`key={item._id}`:** React virtual DOM identifier tracking element updates and deletions.

## 🏗️ Project Structure
* [`../frontend/src/pages/users/UserList.jsx`](../frontend/src/pages/users/UserList.jsx)
* [`../frontend/src/components/Table.jsx`](../frontend/src/components/Table.jsx)

## ⚙️ Installation / Setup
No new packages required.

## 💻 Step-by-Step Coding

### Step 1: Build Table Component (`frontend/src/components/Table.jsx`)
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

### Step 2: Fetch and Render User List (`frontend/src/pages/users/UserList.jsx`)
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

## 🧪 API / Application Testing
Navigate to `/users` in browser. Verify users stored in MongoDB render cleanly in the HTML table.

## 🔬 Practical Lab
Build `ProductList.jsx` and `SchoolList.jsx` to render product catalog and school directory records.

## ✅ Expected Result
Live MongoDB records render in formatted table with real-time UI delete triggers.

## ⚠️ Common Errors
* Infinite HTTP request loop: Calling state setters inside `useEffect` without providing `[]` dependency array.

## 🔧 Troubleshooting
Ensure dependency array `[]` is provided as second parameter to `useEffect`. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Add empty state fallback (`<p>No user records found</p>`) when array length is 0.

## 📦 Daily Deliverable
Formatted database list tables with dynamic fetch and delete triggers.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
