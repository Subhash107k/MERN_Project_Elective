# Day 09 — Controlled React Forms & State Management

## 🎯 What Was Learned
* Understood controlled vs uncontrolled React form components.
* Bound HTML form input fields to React component state (`useState`).
* Intercepted default HTML form submission reloads using `e.preventDefault()`.
* Constructed reusable form input components (`<Input />`).

## 🧠 Theory & Concepts
Controlled components keep form field values in sync with React state. Every keystroke triggers an `onChange` event handler updating state, keeping UI inputs and component state perfectly aligned.

## 🔑 Key Takeaways
* **Controlled Input:** `<input value={name} onChange={(e) => setName(e.target.value)} />`.
* **`e.preventDefault()`:** Prevents native browser form submission reloads.
* **Payload Assembly:** Compiling state variables into a single data object.

## 🏗️ Project Structure
* [`../frontend/src/components/Input.jsx`](../frontend/src/components/Input.jsx)
* [`../frontend/src/pages/users/CreateUser.jsx`](../frontend/src/pages/users/CreateUser.jsx)

## ⚙️ Setup & Configuration
No additional npm packages required.

## 💻 Implementation

### Step 1: Created Controlled `<Input />` Component (`frontend/src/components/Input.jsx`)
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

### Step 2: Built Controlled Form Page (`frontend/src/pages/users/CreateUser.jsx`)
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

## 🧪 Testing & Verification
Filled in form input fields and clicked Save User. Opened browser console (`F12`) to verify logged state payload object.

## 🔬 Practical Work
Added `address` and `phone` state inputs to `CreateUser.jsx`.

## ✅ What Was Completed
* Built reusable `<Input />` component.
* Bound input values to React component state.
* Captured form payloads without browser reloads.

## ⚠️ Problems Encountered
* Input field value could not be typed into: Caused by setting `value={name}` without providing an `onChange` handler.

## 🔧 Troubleshooting & Fixes
Ensured state setters bound `e.target.value` inside `onChange`.

## 📝 Additional Practice
Added client-side validation asserting phone number contains at least 10 digits before dispatching form.

## 📦 Day Deliverable
Controlled React form collecting user inputs and generating validated payload objects.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Form submission verified
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
