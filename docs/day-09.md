# Day 9 — Controlled React Forms & Validation

## Learning Objectives
* Manage form state using React controlled inputs (`useState`).
* Prevent default browser form behavior using `e.preventDefault()`.
* Build reusable form components (`<Input />`, `<Button />`).
* Implement client-side input validation and error feedback banners.

## What We Learn
Today we master React form handling. We learn how controlled components bind input `value` and `onChange` handlers directly to React state, ensuring input values are validated before submission.

## Why We Learn It
Uncontrolled HTML forms rely on DOM queries. Controlled React forms store real-time field state in React memory, enabling instant validation, input masking, and clear form submission logic.

## Important Concepts
* **Controlled Input:** Input element whose displayed value is driven by React component state (`value={state}`).
* **`e.preventDefault()`:** Prevents native HTML form submission page refreshes.
* **Form Object Compilation:** Assembling individual field states (`name`, `email`) into a clean JavaScript payload object.

## Project Files
* [`frontend/src/components/Input.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/components/Input.jsx)
* [`frontend/src/pages/users/CreateUser.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/pages/users/CreateUser.jsx)
* [`frontend/src/pages/products/CreateProduct.jsx`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/frontend/src/pages/products/CreateProduct.jsx)

## Step-by-Step Explanation
1. Declare state for each field: `const [name, setName] = useState('');`.
2. Pass state and updater to `<Input value={name} onChange={(e) => setName(e.target.value)} />`.
3. Create `handleSubmit` function with `e.preventDefault()`.
4. Validate that required fields are non-empty before proceeding.

## Code Examples
```jsx
const UserForm = () => {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Payload:', { name });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};
```

## Practical Exercise
1. Open `frontend/src/pages/users/CreateUser.jsx`.
2. Fill out all input fields (Name, Email, Password, Address, Phone).
3. Submit the form and open browser dev tools Console to verify compiled object format.

## Common Errors
* **Form reloads page on submit**: Occurs when `e.preventDefault()` is forgotten inside the form submit handler.

## How to Debug
Add `console.log('Form State:', formData)` right at the start of `handleSubmit` to inspect input state values.

## Homework
Add client-side validation checking that the password input is at least 6 characters long before form submission.

## Expected Result
Interactive form capturing typed user input into React state without full page reloads.

## Interview Questions
1. *What is the difference between a controlled component and an uncontrolled component in React?*
2. *Why must `e.preventDefault()` be called when handling React form `onSubmit` events?*

## Day Summary
You have built reusable, controlled React form components with client-side validation and event handling.
