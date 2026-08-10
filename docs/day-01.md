# Day 1 — JavaScript & Node.js Foundations

## Learning Objectives
* Understand what the MERN stack is (MongoDB, Express, React, Node.js).
* Learn how Node.js executes JavaScript on the server outside the browser.
* Understand Node package manager (`npm`), `package.json`, and dependency management.
* Master modern ES Module syntax (`import` / `export`) vs legacy CommonJS (`require`).

## What We Learn
Today we explore the runtime environment that powers backend web applications. Node.js allows developers to write server-side network code using JavaScript. We learn how package configurations control script execution and module imports.

## Why We Learn It
Before building complex REST APIs or database schemas, developers must understand how JavaScript runs on server hardware, how to import external libraries, and how to organize modular code files.

## Important Concepts
* **Node.js Runtime:** Single-threaded, non-blocking asynchronous event loop executing V8 engine JavaScript.
* **ES Modules (`"type": "module"`):** Modern ECMAScript module standard using `import` and `export` statements.
* **`package.json`:** Manifest file storing project metadata, scripts (`dev`, `start`), and third-party package versions.

## Project Files
* [`backend/package.json`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/package.json)
* [`tests/backend/api.test.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/tests/backend/api.test.js)

## Step-by-Step Explanation
1. Open a terminal and navigate to the project directory.
2. Inspect `package.json` to verify `"type": "module"` is configured.
3. Test Node.js execution by running `node -v` to verify Node.js installation (v18+ recommended).
4. Run `npm install` inside the `backend` directory to install dependencies.

## Code Examples
```javascript
// Example ES Module export
export const greetStudent = (name) => {
    return `Welcome to Day 1 of the MERN Course, ${name}!`;
};

// Example ES Module import
import { greetStudent } from './greetings.js';
console.log(greetStudent('Subhash'));
```

## Practical Exercise
1. Create a script named `hello.js` inside `backend/src/`.
2. Write a function that calculates the total cost of an array of items.
3. Export the function using named export syntax and import it into another script.
4. Execute the script using `node backend/src/hello.js`.

## Common Errors
* **`SyntaxError: Cannot use import statement outside a module`**: Happens when `"type": "module"` is missing from `package.json`.
* **`ERR_MODULE_NOT_FOUND`**: Happens when importing local files without providing the explicit `.js` file extension.

## How to Debug
* Always specify the full file path including `.js` extensions in local import statements (e.g., `import user from './models/User.js';`).

## Homework
Modify `package.json` to add a custom script `"welcome": "node -e \"console.log('Day 1 Complete!')\""` and execute it via `npm run welcome`.

## Expected Result
Terminal prints text output confirming successful ES module importing and function execution.

## Interview Questions
1. *What is the difference between CommonJS (`require`) and ES Modules (`import`)?*
2. *Why is `"type": "module"` required in Node.js package files when using top-level imports?*

## Day Summary
You have mastered Node.js runtime basics, npm manifest configuration, and ES Module import/export syntax for server-side development.
