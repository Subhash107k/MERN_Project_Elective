# 📡 REST API Documentation & Postman / Thunder Client Testing Guide

Base URL: `http://localhost:8000/api`

---

## 🔑 Authentication Headers Setup
For endpoints marked **Private**, attach the JWT access token in your Postman or Thunder Client HTTP headers:
```text
Header Key:   Authorization
Header Value: Bearer <your_jwt_token_here>
```

---

## 🧪 Recommended Testing Order

To verify backend endpoints in logical order, follow this workflow:
1. **Health Check:** `GET http://localhost:8000/`
2. **User Registration:** `POST /api/auth/register`
3. **User Login:** `POST /api/auth/login` (Copy returned `token`)
4. **Current User Profile:** `GET /api/auth/me` (With Bearer Token)
5. **Get All Users:** `GET /api/users`
6. **Get Single User:** `GET /api/users/:id`
7. **Update User:** `PATCH /api/users/:id`
8. **Products CRUD:** `POST`, `GET`, `PATCH`, `DELETE` `/api/products`
9. **Schools CRUD:** `POST`, `GET`, `PATCH`, `DELETE` `/api/schools`
10. **Negative Tests:** Invalid password login (`401`), invalid ID string (`400`), unknown route (`404`).

---

## 1. Authentication Endpoints (`/api/auth`)

### `POST /api/auth/register`
* **Method:** `POST`
* **URL:** `http://localhost:8000/api/auth/register`
* **Access:** Public
* **Request Headers:** `Content-Type: application/json`
* **JSON Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "address": "123 Main Street",
  "phone": "+1234567890",
  "nidNumber": "NID123456"
}
```
* **Success Response (`201 Created`):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "_id": "66b1c2f3a4b5c6d7e8f90123",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1Ni..."
  }
}
```
* **Negative Test Cases:**
  * Duplicate Email (`400 Bad Request` -> `"User email already registered"`)
  * Short Password (`400 Bad Request` -> `"Password must be at least 6 characters long"`)

---

### `POST /api/auth/login`
* **Method:** `POST`
* **URL:** `http://localhost:8000/api/auth/login`
* **Access:** Public
* **JSON Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
* **Success Response (`200 OK`):**
```json
{
  "success": true,
  "message": "User authenticated successfully",
  "data": {
    "_id": "66b1c2f3a4b5c6d7e8f90123",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1Ni..."
  }
}
```
* **Negative Test Cases:**
  * Invalid Password (`401 Unauthorized` -> `"Invalid email address or password"`)

---

### `GET /api/auth/me`
* **Method:** `GET`
* **URL:** `http://localhost:8000/api/auth/me`
* **Access:** Private (`Authorization: Bearer <token>`)
* **Success Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "_id": "66b1c2f3a4b5c6d7e8f90123",
    "name": "John Doe",
    "email": "john@example.com",
    "address": "123 Main Street",
    "phone": "+1234567890",
    "role": "user"
  }
}
```
* **Negative Test Cases:**
  * Missing Token (`401 Unauthorized` -> `"Not authorized, no bearer token provided"`)

---

## 2. User Resource Endpoints (`/api/users`)

### `GET /api/users`
* **Method:** `GET`
* **URL:** `http://localhost:8000/api/users`
* **Access:** Public

### `GET /api/users/:id`
* **Method:** `GET`
* **URL:** `http://localhost:8000/api/users/66b1c2f3a4b5c6d7e8f90123`
* **Access:** Public

### `POST /api/users`
* **Method:** `POST`
* **URL:** `http://localhost:8000/api/users`
* **Access:** Public
* **JSON Body:**
```json
{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "password": "password123",
  "address": "456 Park Avenue",
  "phone": "+1987654321"
}
```

### `PATCH /api/users/:id`
* **Method:** `PATCH`
* **URL:** `http://localhost:8000/api/users/66b1c2f3a4b5c6d7e8f90123`
* **Access:** Public
* **JSON Body:**
```json
{
  "address": "789 Updated Broadway",
  "phone": "+1112223333"
}
```

### `DELETE /api/users/:id`
* **Method:** `DELETE`
* **URL:** `http://localhost:8000/api/users/66b1c2f3a4b5c6d7e8f90123`
* **Access:** Private (`Authorization: Bearer <token>`)

---

## 3. Product Resource Endpoints (`/api/products`)

### `GET /api/products`
* **Method:** `GET`
* **URL:** `http://localhost:8000/api/products`

### `POST /api/products`
* **Method:** `POST`
* **URL:** `http://localhost:8000/api/products`
* **JSON Body:**
```json
{
  "name": "Wireless Mechanical Keyboard",
  "price": 129.99,
  "quantity": 50,
  "description": "RGB Backlit Ergonomic Keyboard",
  "category": "Electronics"
}
```

### `PATCH /api/products/:id`
* **Method:** `PATCH`
* **URL:** `http://localhost:8000/api/products/PRODUCT_ID`

### `DELETE /api/products/:id`
* **Method:** `DELETE`
* **URL:** `http://localhost:8000/api/products/PRODUCT_ID`

---

## 4. School Resource Endpoints (`/api/schools`)

### `GET /api/schools`
* **Method:** `GET`
* **URL:** `http://localhost:8000/api/schools`

### `POST /api/schools`
* **Method:** `POST`
* **URL:** `http://localhost:8000/api/schools`
* **JSON Body:**
```json
{
  "name": "Harvard High School",
  "location": "Cambridge, MA",
  "principalName": "Dr. Elizabeth Vance",
  "totalStudents": 1500,
  "email": "info@harvardhigh.edu",
  "phone": "+16174951000"
}
```

### `PATCH /api/schools/:id`
* **Method:** `PATCH`
* **URL:** `http://localhost:8000/api/schools/SCHOOL_ID`

### `DELETE /api/schools/:id`
* **Method:** `DELETE`
* **URL:** `http://localhost:8000/api/schools/SCHOOL_ID`
