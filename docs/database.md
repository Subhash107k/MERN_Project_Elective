# 🗄️ Database Architecture & Mongoose Schema Documentation

This document describes the MongoDB database architecture, Mongoose schemas (`backend/src/schemas/`), compiled models (`backend/src/models/`), field validation rules, and NID upsert strategy.

---

## 📁 Database Directory Structure

```text
backend/src/
├── schemas/                    # Raw Mongoose Schema definitions
│   ├── userSchema.js           # User schema definition, validation & bcrypt hooks
│   ├── productSchema.js        # Product schema definition & indexes
│   └── schoolSchema.js         # School institution schema definition
│
└── models/                     # Compiled Mongoose Models
    ├── User.js                 # User model compiled from userSchema.js
    ├── Product.js              # Product model compiled from productSchema.js
    └── School.js               # School model compiled from schoolSchema.js
```

---

## 📊 Entity Relationship Diagram (ERD)

```text
+------------------------+       +------------------------+       +------------------------+
|      userSchema        |       |     productSchema      |       |      schoolSchema      |
+------------------------+       +------------------------+       +------------------------+
| _id: ObjectId          |       | _id: ObjectId          |       | _id: ObjectId          |
| name: String           |       | name: String           |       | name: String           |
| email: String (Unique) |       | price: Number          |       | location: String       |
| password: String (Hash)|       | quantity: Number       |       | principalName: String  |
| address: String        |       | description: String    |       | totalStudents: Number  |
| phone: String          |       | category: String       |       | email: String          |
| role: Enum['user']     |       | imageUrl: String       |       | phone: String          |
| nidNumber: String      |       | createdAt: Date        |       | createdAt: Date        |
| createdAt: Date        |       | updatedAt: Date        |       | updatedAt: Date        |
| updatedAt: Date        |       +------------------------+       +------------------------+
+------------------------+
```

---

## 📌 Schema Definitions & Validation Rules

### 1. `userSchema.js`
* **Path:** `../backend/src/schemas/userSchema.js`
* **Fields:**
  * `name`: String, required, trimmed.
  * `email`: String, required, unique, lowercase, trimmed.
  * `password`: String, required, minlength 6, excluded by default (`select: false`).
  * `address`: String, required, trimmed.
  * `phone`: String, required, trimmed.
  * `role`: String, enum `['user', 'admin']`, default `'user'`.
  * `nidNumber`: String, default `null`.
* **Hooks & Indexes:**
  * `userSchema.index({ email: 1, role: 1 })`: Compound index for query acceleration.
  * `pre('save')`: Hashes password using `bcryptjs` (10 salt rounds) before database write.
  * `methods.matchPassword()`: Compares entered plaintext password with stored hash.

### 2. `productSchema.js`
* **Path:** `../backend/src/schemas/productSchema.js`
* **Fields:**
  * `name`: String, required, trimmed.
  * `price`: Number, required, minimum 0.
  * `quantity`: Number, required, minimum 0, default 0.
  * `description`: String, default `""`.
  * `category`: String, default `"General"`.
  * `imageUrl`: String, default `""`.
* **Indexes:** `productSchema.index({ name: 1 })`.

### 3. `schoolSchema.js`
* **Path:** `../backend/src/schemas/schoolSchema.js`
* **Fields:**
  * `name`: String, required, trimmed.
  * `location`: String, required, trimmed.
  * `principalName`: String, required, trimmed.
  * `totalStudents`: Number, required, minimum 0.
  * `email`: String, required, lowercase.
  * `phone`: String, required.
* **Indexes:** `schoolSchema.index({ name: 1, location: 1 })`.

---

## 🔄 NID Upsert Strategy Workflow

To prevent duplicate key exceptions (`E11000`) when users register with an existing National ID (NID), `authController.js` executes an upsert strategy:

```javascript
if (nidNumber) {
    const existingNidUser = await User.findOne({ nidNumber });
    if (existingNidUser) {
        existingNidUser.name = name;
        existingNidUser.address = address;
        existingNidUser.phone = phone;
        await existingNidUser.save();
        return sendSuccess(res, 200, 'NID User updated successfully', existingNidUser);
    }
}
```
