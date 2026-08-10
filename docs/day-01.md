# Day 1 — HTML5 Fundamentals, Web Architecture & Node.js Setup

## Learning Objectives
* Understand how client-server web architecture works (Client Browser <-> HTTP <-> Server).
* Master HTML5 semantic structure tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
* Build HTML forms (`<form>`, `<input>`, `<label>`, `<button>`) with client-side attribute validations.
* Set up Node.js runtime, npm package manager, and ES Module syntax (`import`/`export`).

## What We Learn
Today we lay the web foundations. We learn how HTML5 constructs web pages and forms in the browser, how client HTTP requests flow to backend servers, and how to configure a Node.js development environment.

## Why We Learn It
HTML forms and markup are the gateway through which users interact with web applications. Understanding HTML form elements and attributes prepares us for building controlled React forms later in the course.

## Important Concepts
* **HTML5 Semantic Elements:** Tags (`<main>`, `<article>`, `<form>`) providing semantic structure to web documents.
* **HTML Forms (`<form>`):** Input elements (`<input type="text">`, `<button type="submit">`) capturing user data for submission.
* **Node.js Environment:** Server runtime allowing JavaScript code to execute outside the browser.

## Project Files
* [`docs/day-01.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-01.md)
* [`backend/package.json`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/package.json)

## Step-by-Step Explanation
1. Create a basic `index.html` web page with semantic HTML5 tags.
2. Build an HTML user form containing Name, Email, Password, and Address fields.
3. Open a terminal and run `node -v` to verify Node.js installation.
4. Initialize Node dependencies with `npm install` inside `backend/`.

## Code Examples
```html
<!-- HTML5 Form Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Day 1 HTML Form</title>
</head>
<body>
    <main>
        <h1>User Registration</h1>
        <form action="/api/users" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Register</button>
        </form>
    </main>
</body>
</html>
```

## Practical Exercise
1. Create a standalone `index.html` file in `frontend/`.
2. Add a form with text inputs, radio buttons, and a submit button.
3. Verify form validation directly in your browser.

## Common Errors
* **Form submits and reloads page unexpectedly**: Default browser HTML forms execute a GET/POST request refresh unless intercepted.

## How to Debug
Inspect HTML form tags to ensure `name` attributes match server property keys.

## Homework
Create an HTML page containing a product creation form with Name, Price, and Description input fields.

## Expected Result
Browser renders a structured HTML5 webpage and form with client validation rules active.

## Interview Questions
1. *What are semantic HTML5 tags and why are they important for accessibility and SEO?*
2. *How do HTML form attributes like `required` and `type="email"` enforce browser-level validation?*

## Day Summary
You have mastered HTML5 semantic markup, form creation, web architecture, and Node.js environment setup.
