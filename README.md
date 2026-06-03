# MERN Project (Backend)

## 📖 Project Overview

This repository contains the **backend portion** of a MERN stack application built using:

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**

It focuses on backend API development, schema design, and route structuring.

---

## 📁 Project Structure

```text
Backend/
│
├── index.js                          # Main Express server entry point
├── src/
│   ├── routes/
│   │   ├── fristRoutes.js            # Basic route experiments (root & dynamic routes)
│   │   ├── userRoutes.js             # User REST API routes
│   │   ├── productRoutes.js          # Product REST API routes
│   │
│   ├── schema/
│   │   ├── userSchema.js             # Mongoose schema for users
│   │   ├── productSchema.js          # Mongoose schema for products
```

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors
* nodemon

---

## 📊 Progress Update

### 🚀 Day 1 – Project Setup

* Initialized backend project
* Installed dependencies:

  * express
  * mongoose
  * cors
  * dotenv
  * nodemon
* Created `index.js` (server entry point)
* Configured Express JSON parsing
* Connected MongoDB (`mongodb://localhost:27017`)
* Built initial routing experiments in `fristRoutes.js`

---

### 🧩 Day 2 – Schema & Routes

* Created Mongoose schemas:

  * `userSchema`
  * `productSchema`
* User schema fields:

  * name, email, password, address, phone
* Product schema fields:

  * name, price, quantity, description (optional)
* Created REST API route scaffolds:

  * `userRoutes.js`
  * `productRoutes.js`

---

### 🔗 Day 3 – Route Integration

* Mounted `/user` routes in `index.js`
* Verified server startup and MongoDB connection
* Confirmed route scaffolding works
* Noted product routes are not yet mounted
* Backend is currently in **scaffold phase**

---

## 📌 Current Status

* ✅ Express server is running
* ✅ MongoDB connection established
* ✅ User routes mounted at `/user`
* ⚠️ Product routes not yet mounted
* ⚠️ Models not fully integrated with route handlers
* ⚠️ CRUD logic not implemented yet

---

## 🚧 Next Steps

* Implement full CRUD operations for users and products
* Connect Mongoose models with route handlers
* Mount `productRoutes` in `index.js`
* Add validation and error handling
* Move configuration values to `.env`
* Improve API response structure
* Build frontend (React) and integrate with backend

---

## 🧪 Future Enhancements

* JWT Authentication
* Password hashing (bcrypt)
* Role-based access control
* API testing with Postman
* Centralized error handling middleware

---

## 👨‍💻 Author

**Subhash**
MERN Stack Developer
GitHub: [https://github.com/subhash107k]

---

## 📌 License

This project is for educational and learning purposes.
