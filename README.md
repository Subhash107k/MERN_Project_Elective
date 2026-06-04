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
* Tested API endpoints using Postman

---

### ⚡ Day 4 – User CRUD Implementation

* Connected `User` model with route handlers
* Implemented Create User API (`POST /user`)
* Implemented Get All Users API (`GET /user`)
* Implemented Get User By ID API (`GET /user/:id`)
* Implemented Update User API (`PATCH /user/:id`)
* Implemented Delete User API (`DELETE /user/:id`)
* Added async/await based database operations
* Added basic try-catch error handling
* Tested CRUD operations successfully using Postman

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

## 📌 Current Status

* ✅ Express server is running
* ✅ MongoDB connection established
* ✅ User schema integrated with MongoDB
* ✅ User CRUD operations implemented
* ✅ User routes mounted at `/user`
* ✅ API testing completed with Postman
* ⚠️ Product CRUD operations pending
* ⚠️ Validation middleware not implemented
* ⚠️ Environment variables not fully configured

---

## 🚧 Next Steps

* Implement Product CRUD operations
* Mount `productRoutes` in `index.js`
* Add request validation using Mongoose validators
* Move MongoDB URI and server port into `.env`
* Add centralized error handling middleware
* Improve API response structure
* Add password hashing with bcrypt
* Implement JWT Authentication
* Create React frontend and connect APIs

---

## 🧪 Future Enhancements

* JWT Authentication
* Refresh Token System
* Password Hashing (bcrypt)
* Role-Based Access Control (RBAC)
* API Documentation (Swagger/OpenAPI)
* Centralized Logging
* Input Validation Middleware
* Docker Support
* Deployment (Render / Railway / VPS)
* Unit & Integration Testing
* CI/CD Pipeline


## 👨‍💻 Author

**Subhash**
MERN Stack Developer
GitHub: [https://github.com/subhash107k]

---

## 📌 License

This project is for educational and learning purposes.
