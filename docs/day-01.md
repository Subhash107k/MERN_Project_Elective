# Day 01 — HTML5 Fundamentals, Web Architecture & Node.js Setup

## 🎯 Learning Objectives
* Explain client-server web architecture (Browser Client ↔ HTTP ↔ Web Server).
* Write clean HTML5 semantic web pages using tags like `<main>`, `<nav>`, and `<form>`.
* Build interactive HTML forms with attributes (`required`, `placeholder`, `type`).
* Set up Node.js runtime environment and write server-side ES Module JavaScript.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Text editor (VS Code) installed.
* Web browser (Chrome/Edge/Firefox).

## 🧠 Theory
Web applications operate on a Client-Server model. The client (web browser) renders HTML/CSS/JS and captures user input through forms. HTTP requests carry this data across network sockets to backend servers (Node.js runtime), which process business logic and return HTTP responses.

## 🔑 Key Concepts
* **HTML5 Semantic Tags:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` structuring web pages for SEO and accessibility.
* **HTML Forms:** `<form>` container holding `<input>` and `<button>` elements.
* **Node.js Runtime:** V8 JavaScript engine executing JavaScript outside web browsers.
* **ES Modules:** Standard `import`/`export` syntax enabled via `"type": "module"` in `package.json`.

## 🏗️ Project Structure
* [`../backend/package.json`](../backend/package.json)

## ⚙️ Installation / Setup
Check Node version and install backend dependencies:
```bash
cd backend
npm install
```

## 💻 Step-by-Step Coding

### Step 1: Create Practice HTML Form (`index.html`)
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

### Step 2: Write Helper ESM Script (`backend/src/greetings.js`)
```javascript
export const formatWelcomeMessage = (name) => {
    return `Hello ${name}, welcome to Day 1 of the MERN Course!`;
};
```

### Step 3: Run Node Test Script (`backend/src/testDay1.js`)
```javascript
import { formatWelcomeMessage } from './greetings.js';
console.log(formatWelcomeMessage('Student'));
```

## 🧪 API / Application Testing
Run the script using Node:
```bash
node src/testDay1.js
```

## 🔬 Practical Lab
Build a product entry HTML form containing Product Name, Price, and Description fields.

## ✅ Expected Result
Terminal displays `Hello Student, welcome to Day 1 of the MERN Course!`.

## ⚠️ Common Errors
* `SyntaxError: Cannot use import statement outside a module`: Missing `"type": "module"` in `package.json`.

## 🔧 Troubleshooting
Ensure relative import paths include the `.js` extension (e.g. `./greetings.js`). Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Add a dropdown `<select>` menu allowing users to pick a course category.

## 📦 Daily Deliverable
Functional HTML form markup and executable ESM Node script.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
