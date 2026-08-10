# 📡 API Documentation & Endpoint Reference

Base URL: `http://localhost:8000/api`

---

## 🔑 Authentication Endpoints (`/api/auth`)

### 1. Register User
* **Method:** `POST`
* **Endpoint:** `/api/auth/register`
* **Access:** Public
* **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "address": "123 Main St",
  "phone": "9841234567",
  "nidNumber": "NID123456"
}
```
* **Success Response (201 Created):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "_id": "66b1c2f3a4b5c6d7e8f90123",
    "name": "John Doe",
    "email": "john@example.com",
    "address": "123 Main St",
    "phone": "9841234567",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
  }
}
```

### 2. Login User
* **Method:** `POST`
* **Endpoint:** `/api/auth/login`
* **Access:** Public
* **Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
* **Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "_id": "66b1c2f3a4b5c6d7e8f90123",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
  }
}
```

---

## 👥 User Endpoints (`/api/users`)

| Method | Endpoint | Description | Auth Required | Payload |
| :--- | :--- | :--- | :---: | :--- |
| `GET` | `/api/users` | Fetch all user records | No | None |
| `GET` | `/api/users/:id` | Fetch single user by ID | No | None |
| `POST` | `/api/users` | Create user document | No | `{ name, email, password, address, phone }` |
| `PATCH` | `/api/users/:id` | Update user details | No | Key-value updates |
| `DELETE` | `/api/users/:id` | Remove user document | No | None |

---

## 📦 Product Endpoints (`/api/products`)

| Method | Endpoint | Description | Auth Required | Payload |
| :--- | :--- | :--- | :---: | :--- |
| `GET` | `/api/products` | Fetch product catalog | No | None |
| `GET` | `/api/products/:id` | Fetch single product by ID | No | None |
| `POST` | `/api/products` | Create product listing | No | `{ name, price, quantity, description }` |
| `PATCH` | `/api/products/:id` | Update product | No | Key-value updates |
| `DELETE` | `/api/products/:id` | Remove product | No | None |

---

## 🏫 School Endpoints (`/api/schools`)

| Method | Endpoint | Description | Auth Required | Payload |
| :--- | :--- | :--- | :---: | :--- |
| `GET` | `/api/schools` | Fetch all school records | No | None |
| `GET` | `/api/schools/:id` | Fetch school by ID | No | None |
| `POST` | `/api/schools` | Register school profile | No | `{ name, location, principalName, totalStudents, email, phone }` |
| `PATCH` | `/api/schools/:id` | Update school details | No | Key-value updates |
| `DELETE` | `/api/schools/:id` | Remove school record | No | None |
