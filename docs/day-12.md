# Day 12 — Password Hashing & Authentication

## Learning Objectives
* Understand security risks of storing raw plaintext user passwords.
* Implement password hashing using `bcryptjs` pre-save hooks in Mongoose.
* Build user authentication controllers (`registerUser`, `loginUser`).
* Compare entered passwords against database hashes using instance methods (`matchPassword`).

## What We Learn
Today we add security to user management. We learn how `bcryptjs` applies cryptographic salt algorithms to turn plaintext passwords into irreversible hash strings before database insertion, and how login routes verify credentials safely.

## Why We Learn It
Storing raw plaintext passwords in a database is a critical security vulnerability. If a database is compromised, plaintext passwords expose users across services.

## Important Concepts
* **Salt Factor:** Random cryptographic data added to passwords before hashing to prevent rainbow table attacks.
* **Mongoose Pre-Save Hook:** Middleware function executing right before document saving (`schema.pre('save')`).
* **Instance Method (`matchPassword`):** Custom method attached to schema documents comparing typed passwords against stored hashes.

## Project Files
* [`backend/src/models/User.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/models/User.js)
* [`backend/src/controllers/authController.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/controllers/authController.js)

## Step-by-Step Explanation
1. Install `bcryptjs`: `npm install bcryptjs` inside `backend/`.
2. Add pre-save hook in `User.js`: `this.password = await bcrypt.hash(this.password, salt);`.
3. Add comparison method: `userSchema.methods.matchPassword = async function(pass) { ... }`.
4. Create `loginUser` controller verifying user credentials and returning user data.

## Code Examples
```javascript
// Pre-save Password Hashing Hook in Mongoose
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
```

## Practical Exercise
1. Open Postman and submit `POST /api/auth/register` with `{ name, email, password: "myPassword123" }`.
2. Open MongoDB Compass or shell and inspect the created user document.
3. Verify that the `password` field displays a secure hash (e.g. `$2a$10$...`) instead of plaintext.

## Common Errors
* **Infinite hashing loop / Double hashing**: Occurs when updating user records without checking `this.isModified('password')`.

## How to Debug
Always include `if (!this.isModified('password')) return next();` inside the Mongoose pre-save hook.

## Homework
Implement custom error handling in `loginUser` returning `401 Unauthorized` when an invalid password is provided.

## Expected Result
User passwords stored as secure `bcryptjs` hashes in MongoDB, with working credential login comparison.

## Interview Questions
1. *Why should passwords never be stored in plaintext in a production database?*
2. *What is a cryptographic salt and how does it strengthen password hashing?*

## Day Summary
You have secured user passwords using `bcryptjs` cryptographic salt algorithms and implemented secure user authentication routes.
