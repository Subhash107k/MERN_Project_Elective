# Day 09 — Controlled React Forms & State Management

## 🎯 Learning Objectives
* Understand controlled vs uncontrolled React form components.
* Bind HTML form fields to React component state (`useState`).
* Intercept default HTML form submission using `e.preventDefault()`.
* Build reusable input components (`<Input />`).

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 08](./day-08.md).

## 🧠 Theory
Controlled components keep form field values in sync with React state. Every keystroke triggers an `onChange` event handler updating state, keeping UI inputs and component state perfectly aligned.

## 🔑 Key Concepts
* **Controlled Input:** `<input value={name} onChange={(e) => setName(e.target.value)} />`.
* **`e.preventDefault()`:** Prevents native browser form submission reloads.
* **Payload Assembly:** Compiling state variables into a single data object.

## 🏗️ Project Structure
* [`../frontend/src/components/Input.jsx`](../frontend/src/components/Input.jsx)
* [`../frontend/src/pages/users/CreateUser.jsx`](../frontend/src/pages/users/CreateUser.jsx)

## ⚙️ Installation / Setup
No extra packages required.

## 💻 Step-by-Step Coding

### Step 1: Create Controlled `<Input />` Component (`frontend/src/components/Input.jsx`)
```jsx
import React from 'react';

const Input = ({ label, id, type = 'text', value, onChange, required = false }) => (
    <div className="form-group">
        {label && <label htmlFor={id}>{label}</label>}
        <input id={id} type={type} value={value} onChange={onChange} required={required} className="form-control" />
    </div>
);

export default Input;
```

### Step 2: Build Controlled Form Page (`frontend/src/pages/users/CreateUser.jsx`)
```jsx
import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Payload:', { name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Button type="submit">Save User</Button>
        </form>
    );
};

export default CreateUser;
```

## 🧪 API / Application Testing
Fill in form input fields and click Save User. Open browser console (`F12`) to verify logged state payload object.

## 🔬 Practical Lab
Add `address` and `phone` state inputs to `CreateUser.jsx`.

## ✅ Expected Result
Form values log accurately to browser console on submit without page refresh.

## ⚠️ Common Errors
* Input field cannot be typed into: Setting `value={name}` without binding `onChange` handler.

## 🔧 Troubleshooting
Ensure state setters use `e.target.value`.

## 📝 Practice Exercise
Add client-side validation asserting phone number contains at least 10 digits before dispatching form.

## 📦 Daily Deliverable
Controlled React form collecting user inputs and generating validated payload objects.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
