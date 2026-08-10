# Day 01 — HTML5 Fundamentals, Web Architecture & Node.js Setup

## 🎯 What Was Learned
* Understood how client-server web architecture operates (Browser Client ↔ HTTP ↔ Web Server).
* Built structured HTML5 web pages using semantic tags (`<main>`, `<nav>`, `<form>`).
* Constructed user input forms with validation attributes (`required`, `placeholder`, `type`).
* Configured Node.js runtime environment and wrote server-side ES Module JavaScript code.

## 🧠 Theory & Concepts
Web applications rely on a Client-Server model. The client browser renders user interfaces and captures input via HTML forms. HTTP requests transport data across network sockets to a Node.js backend server, which executes business logic and returns structured responses.

## 🔑 Key Takeaways
* **HTML5 Semantic Elements:** Tags like `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` structure documents for browser rendering, SEO, and accessibility.
* **HTML Forms:** Container elements holding `<input>` and `<button>` elements that capture user data.
* **Node.js Runtime:** Chrome V8 JavaScript engine executing server-side code outside web browsers.
* **ES Modules:** Standard JavaScript `import`/`export` syntax enabled via `"type": "module"` in `package.json`.

## 🏗️ Project Structure
* [`../backend/package.json`](../backend/package.json)

## ⚙️ Setup & Configuration
Verified Node version and installed initial backend dependencies:
```bash
cd backend
npm install
```

## 💻 Implementation

### Step 1: Constructed HTML Registration Form (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Day 1 HTML Form</title>
</head>
<body>
    <main>
        <h2>User Registration</h2>
        <form action="/api/users" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Submit</button>
        </form>
    </main>
</body>
</html>
```

### Step 2: Wrote Modular ES Module Helper (`backend/src/greetings.js`)
```javascript
export const formatWelcomeMessage = (name) => {
    return `Hello ${name}, welcome to Day 1 of MERN development!`;
};
```

### Step 3: Implemented Node Execution Script (`backend/src/testDay1.js`)
```javascript
import { formatWelcomeMessage } from './greetings.js';
console.log(formatWelcomeMessage('Student'));
```

## 🧪 Testing & Verification
Executed the test script using Node.js:
```bash
node src/testDay1.js
```

## 🔬 Practical Work
Constructed a product registration HTML form containing Product Name, Price, and Description fields.

## ✅ What Was Completed
* Verified Node.js environment installation.
* Created structured HTML5 form layout.
* Executed modular ES Module JavaScript script on Node.js.

## ⚠️ Problems Encountered
* `SyntaxError: Cannot use import statement outside a module`: Occurred when `package.json` was missing `"type": "module"`.

## 🔧 Troubleshooting & Fixes
Added `"type": "module"` to `backend/package.json` and verified relative imports included the `.js` extension. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Additional Practice
Added a dropdown `<select>` menu allowing users to choose a registration role.

## 📦 Day Deliverable
Functional HTML5 input form and executable ES Module Node.js script.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Script executed successfully
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
