# 🗄️ Database Architecture & Mongoose Schema Documentation

## MERN Stack Development Project

This document describes the MongoDB database architecture, Mongoose schema definitions, compiled models, validation rules, indexes, authentication-related database behavior, and the **NID-based user upsert workflow** used by the application.

The database layer follows a clear separation between:

```text
Schema Definitions
        ↓
Mongoose Models
        ↓
Controllers / Services
        ↓
MongoDB
```

The current database design contains three primary document models:

* **User**
* **Product**
* **School**

---

# 1. Database Architecture Overview

The application uses **MongoDB** as its primary NoSQL database and **Mongoose** as the Object Data Modeling (ODM) library.

Mongoose provides:

* Schema definitions
* Field validation
* Default values
* Indexes
* Middleware/hooks
* Instance methods
* Model compilation
* MongoDB query abstraction

The database architecture is organized into two primary layers:

```text
┌──────────────────────────────────────────────┐
│              Application Layer               │
│                                              │
│ Controllers / Services / API Routes          │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│               Mongoose Layer                 │
│                                              │
│ Schemas → Models → Validation → Hooks        │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│                 MongoDB                      │
│                                              │
│ Users | Products | Schools                   │
└──────────────────────────────────────────────┘
```

---

# 2. Database Directory Structure

```text
backend/src/
│
├── schemas/                         # Raw Mongoose schemas
│   ├── userSchema.js                # User schema, validation & bcrypt hooks
│   ├── productSchema.js             # Product schema & indexes
│   └── schoolSchema.js              # School schema & indexes
│
└── models/                          # Compiled Mongoose models
    ├── User.js                      # User model
    ├── Product.js                   # Product model
    └── School.js                    # School model
```

### Architectural Responsibility

| Directory      | Responsibility                                   |
| -------------- | ------------------------------------------------ |
| `schemas/`     | Defines document structure and validation        |
| `models/`      | Compiles schemas into reusable Mongoose models   |
| `controllers/` | Implements application/database operations       |
| `routes/`      | Exposes database functionality through HTTP APIs |
| MongoDB        | Persists application documents                   |

---

# 3. Database Collections

The current application defines three primary models.

```text
MongoDB Database
│
├── users
│
├── products
│
└── schools
```

These models represent independent application resources.

At the documented schema level, there are currently **no explicit Mongoose references** between the three models.

Therefore, the current structure is better represented as a **MongoDB data model** rather than a traditional relational ERD.

---

# 4. MongoDB Data Model

```text
                         MongoDB
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
      ┌─────────┐       ┌──────────┐      ┌──────────┐
      │  users  │       │ products │      │ schools  │
      └─────────┘       └──────────┘      └──────────┘
          │                 │                 │
          │                 │                 │
      User Data         Product Data      Institution Data
```

Each collection is independently modeled using Mongoose.

---

# 5. User Data Model

## Collection

```text
users
```

## Schema

```text
userSchema.js
```

## Model

```text
User.js
```

## Document Structure

```text
User
├── _id
├── name
├── email
├── password
├── address
├── phone
├── role
├── nidNumber
├── createdAt
└── updatedAt
```

---

# 6. User Schema Definition

The `userSchema.js` file defines the structure and validation rules for user documents.

### Fields

| Field       | Type     | Required | Default | Validation / Behavior                   |
| ----------- | -------- | -------: | ------- | --------------------------------------- |
| `_id`       | ObjectId |     Auto | Auto    | MongoDB identifier                      |
| `name`      | String   |      Yes | —       | Trimmed                                 |
| `email`     | String   |      Yes | —       | Unique, lowercase, trimmed              |
| `password`  | String   |      Yes | —       | Minimum 6 characters, hidden by default |
| `address`   | String   |      Yes | —       | Trimmed                                 |
| `phone`     | String   |      Yes | —       | Trimmed                                 |
| `role`      | String   |       No | `user`  | `user` or `admin`                       |
| `nidNumber` | String   |       No | `null`  | National ID value                       |
| `createdAt` | Date     |     Auto | Auto    | Timestamp                               |
| `updatedAt` | Date     |     Auto | Auto    | Timestamp                               |

---

# 7. User Field Validation

## Name

```javascript
name: {
    type: String,
    required: true,
    trim: true
}
```

The name is mandatory and whitespace is removed from the beginning and end of the value.

---

## Email

```javascript
email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
}
```

The email field:

* Must be provided
* Is converted to lowercase
* Is trimmed
* Uses a uniqueness constraint

This helps prevent multiple users from being registered with the same email address.

---

## Password

```javascript
password: {
    type: String,
    required: true,
    minlength: 6,
    select: false
}
```

The password:

* Is required
* Must contain at least six characters
* Is excluded from normal Mongoose query results using `select: false`

This provides an additional layer of protection against accidental password exposure.

---

# 8. User Role

The role field is restricted to the following values:

```text
user
admin
```

Conceptually:

```text
role
 │
 ├── user
 │
 └── admin
```

The default role is:

```text
user
```

This allows the application to distinguish between normal users and administrative users.

---

# 9. NID Number

The user model contains:

```text
nidNumber
```

The documented schema specifies:

```text
Type: String
Default: null
```

The field is used by the authentication workflow to identify an existing user through their National ID value.

The current documentation does not define a unique index on `nidNumber`.

Therefore, uniqueness behavior for NID values is handled through the controller workflow rather than a documented database-level unique constraint.

---

# 10. User Schema Indexes

The documented user schema defines the following compound index:

```javascript
userSchema.index({
    email: 1,
    role: 1
});
```

This creates an index on:

```text
email + role
```

The index can improve query performance when both fields participate in database queries.

### Index Representation

```text
users
 │
 └── Index
      ├── email: 1
      └── role: 1
```

The schema also specifies `email` as unique.

---

# 11. Password Hashing Workflow

The user schema includes a Mongoose `pre('save')` hook.

The purpose of this hook is to hash a plaintext password before it is written to MongoDB.

```text
User Registration
       │
       ▼
Plaintext Password
       │
       ▼
Mongoose pre-save Hook
       │
       ▼
bcryptjs
       │
       ▼
Salted Password Hash
       │
       ▼
MongoDB
```

The documented implementation uses:

```text
bcryptjs
10 salt rounds
```

The database therefore stores the password hash rather than the original plaintext password.

---

# 12. Password Verification

The user model exposes:

```text
matchPassword()
```

This method compares:

```text
Entered Password
       ↓
bcrypt Comparison
       ↓
Stored Password Hash
```

The result is used by the authentication controller to determine whether the submitted credentials are valid.

---

# 13. Product Data Model

## Collection

```text
products
```

## Schema

```text
productSchema.js
```

## Model

```text
Product.js
```

## Document Structure

```text
Product
├── _id
├── name
├── price
├── quantity
├── description
├── category
├── imageUrl
├── createdAt
└── updatedAt
```

---

# 14. Product Schema Definition

| Field         | Type     | Required | Default     | Validation         |
| ------------- | -------- | -------: | ----------- | ------------------ |
| `_id`         | ObjectId |     Auto | Auto        | MongoDB identifier |
| `name`        | String   |      Yes | —           | Trimmed            |
| `price`       | Number   |      Yes | —           | Minimum `0`        |
| `quantity`    | Number   |      Yes | `0`         | Minimum `0`        |
| `description` | String   |       No | `""`        | —                  |
| `category`    | String   |       No | `"General"` | —                  |
| `imageUrl`    | String   |       No | `""`        | —                  |
| `createdAt`   | Date     |     Auto | Auto        | Timestamp          |
| `updatedAt`   | Date     |     Auto | Auto        | Timestamp          |

---

# 15. Product Validation Rules

### Product Name

Required and trimmed.

### Price

Must be a number greater than or equal to zero.

```text
price >= 0
```

### Quantity

Must be a number greater than or equal to zero.

```text
quantity >= 0
```

The default quantity is:

```text
0
```

### Description

Optional.

Default:

```text
""
```

### Category

Optional.

Default:

```text
"General"
```

### Image URL

Optional.

Default:

```text
""
```

---

# 16. Product Index

The product schema defines:

```javascript
productSchema.index({
    name: 1
});
```

This creates an ascending index on the product name.

```text
products
   │
   └── name: 1
```

This can improve queries that search or sort by product name.

---

# 17. School Data Model

## Collection

```text
schools
```

## Schema

```text
schoolSchema.js
```

## Model

```text
School.js
```

## Document Structure

```text
School
├── _id
├── name
├── location
├── principalName
├── totalStudents
├── email
├── phone
├── createdAt
└── updatedAt
```

---

# 18. School Schema Definition

| Field           | Type     | Required | Default | Validation         |
| --------------- | -------- | -------: | ------- | ------------------ |
| `_id`           | ObjectId |     Auto | Auto    | MongoDB identifier |
| `name`          | String   |      Yes | —       | Trimmed            |
| `location`      | String   |      Yes | —       | Trimmed            |
| `principalName` | String   |      Yes | —       | Trimmed            |
| `totalStudents` | Number   |      Yes | —       | Minimum `0`        |
| `email`         | String   |      Yes | —       | Lowercase          |
| `phone`         | String   |      Yes | —       | Required           |
| `createdAt`     | Date     |     Auto | Auto    | Timestamp          |
| `updatedAt`     | Date     |     Auto | Auto    | Timestamp          |

---

# 19. School Validation Rules

### School Name

Required and trimmed.

### Location

Required and trimmed.

### Principal Name

Required and trimmed.

### Total Students

Must be a number greater than or equal to zero.

```text
totalStudents >= 0
```

### Email

Required and converted to lowercase.

### Phone

Required.

---

# 20. School Index

The school schema defines a compound index:

```javascript
schoolSchema.index({
    name: 1,
    location: 1
});
```

This creates:

```text
schools
   │
   └── Compound Index
        ├── name: 1
        └── location: 1
```

The index is intended to improve queries involving school name and location.

---

# 21. Timestamps

The schemas use automatic timestamp fields.

The database records:

```text
createdAt
updatedAt
```

### `createdAt`

Records when the document was created.

### `updatedAt`

Records the most recent update.

Example:

```json
{
    "createdAt": "2026-08-10T10:00:00.000Z",
    "updatedAt": "2026-08-10T12:30:00.000Z"
}
```

These timestamps support:

* Auditing
* Sorting
* Change tracking
* Administrative reporting

---

# 22. Compiled Mongoose Models

Mongoose schemas are compiled into reusable models.

```text
Schema
  ↓
mongoose.model()
  ↓
Compiled Model
```

The project separates these responsibilities:

```text
schemas/
    ↓
Schema Definitions

models/
    ↓
Compiled Models
```

The models are then imported by controllers and other backend services.

---

# 23. Database Request Lifecycle

A typical database request follows this workflow:

```text
HTTP Request
     │
     ▼
Express Route
     │
     ▼
Middleware
     │
     ▼
Controller
     │
     ▼
Mongoose Model
     │
     ▼
Schema Validation
     │
     ▼
MongoDB
     │
     ▼
Mongoose Document
     │
     ▼
Controller Response
     │
     ▼
JSON Response
```

---

# 24. NID Upsert Strategy

The authentication controller implements a special workflow for users registering with an existing NID.

The purpose is to avoid a duplicate-key failure when an existing NID is encountered during registration.

The workflow is:

```text
Registration Request
        │
        ▼
Is nidNumber provided?
        │
        ├── No ───────────────► Normal Registration
        │
        ▼
Search User by NID
        │
        ▼
Existing User Found?
        │
    ┌───┴────┐
    │        │
   No       Yes
    │        │
    ▼        ▼
Normal     Update Existing
Register   User Information
             │
             ▼
          Save User
             │
             ▼
       Success Response
```

---

# 25. NID Upsert Implementation

The documented controller logic is:

```javascript
if (nidNumber) {
    const existingNidUser = await User.findOne({ nidNumber });

    if (existingNidUser) {
        existingNidUser.name = name;
        existingNidUser.address = address;
        existingNidUser.phone = phone;

        await existingNidUser.save();

        return sendSuccess(
            res,
            200,
            'NID User updated successfully',
            existingNidUser
        );
    }
}
```

This workflow:

1. Checks whether an NID was provided.
2. Searches the `User` collection.
3. Finds an existing document using `nidNumber`.
4. Updates selected user information.
5. Saves the existing document.
6. Returns a successful response.

---

# 26. NID Update Data Flow

Only the following documented fields are updated by this workflow:

```text
Existing User
      │
      ├── name     ← New name
      ├── address  ← New address
      └── phone    ← New phone
```

The workflow does not overwrite the entire user document.

This reduces the risk of unintentionally replacing unrelated user information.

---

# 27. Duplicate-Key Consideration

The NID workflow is designed to avoid the registration path reaching a duplicate-key error when an existing NID is detected by the controller.

MongoDB duplicate-key errors are commonly represented by:

```text
E11000
```

However, controller-level lookup and database-level uniqueness are different mechanisms.

Therefore:

```text
Controller Check
       +
Database Constraints
```

should be considered separately when designing production-grade uniqueness guarantees.

---

# 28. Database Validation Layers

The application uses multiple validation layers.

```text
┌────────────────────────────┐
│      Frontend Validation   │
└──────────────┬─────────────┘
               ↓
┌────────────────────────────┐
│       API Validation       │
└──────────────┬─────────────┘
               ↓
┌────────────────────────────┐
│     Mongoose Validation    │
└──────────────┬─────────────┘
               ↓
┌────────────────────────────┐
│      MongoDB Storage       │
└────────────────────────────┘
```

Each layer serves a different purpose.

Client-side validation improves user experience, while server-side and schema validation protect the backend from invalid requests.

---

# 29. Database Security Considerations

The documented schema design includes several security-oriented practices.

### Password Protection

Passwords are hashed using bcryptjs.

### Password Query Protection

The password field uses:

```text
select: false
```

### Role Restriction

User roles are restricted to:

```text
user
admin
```

### Environment Configuration

Database credentials should be stored through environment variables rather than committed source code.

### Validation

Mongoose validation reduces the likelihood of invalid data entering the database.

---

# 30. Database Performance Considerations

The current schemas define indexes for frequently queried fields.

### User

```javascript
{ email: 1, role: 1 }
```

### Product

```javascript
{ name: 1 }
```

### School

```javascript
{ name: 1, location: 1 }
```

Indexes can reduce query time for supported query patterns, but they also increase storage requirements and write overhead.

Therefore, indexes should be reviewed against actual application query patterns as the system grows.

---

# 31. Database Architecture Summary

```text
                         APPLICATION
                              │
                              ▼
                     Express Controllers
                              │
                              ▼
                       Mongoose Models
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
         User Model      Product Model     School Model
             │                │                │
             ▼                ▼                ▼
        users collection products collection schools collection
             │                │                │
             └────────────────┼────────────────┘
                              ▼
                           MongoDB
```

---

# 32. Schema-to-Model Mapping

| Schema             | Model        | Collection | Primary Purpose               |
| ------------------ | ------------ | ---------- | ----------------------------- |
| `userSchema.js`    | `User.js`    | `users`    | Authentication and user data  |
| `productSchema.js` | `Product.js` | `products` | Product management            |
| `schoolSchema.js`  | `School.js`  | `schools`  | School/institution management |

---

# 33. Database Documentation Checklist

| Area                       | Status     |
| -------------------------- | ---------- |
| MongoDB architecture       | Documented |
| Schema definitions         | Documented |
| Mongoose models            | Documented |
| User validation            | Documented |
| Product validation         | Documented |
| School validation          | Documented |
| Password hashing           | Documented |
| Password comparison        | Documented |
| Indexes                    | Documented |
| Timestamps                 | Documented |
| NID workflow               | Documented |
| Database request lifecycle | Documented |
| Security considerations    | Documented |
| Performance considerations | Documented |

---

# 34. Recommended Future Database Enhancements

The current documented architecture can be extended with:

### User Management

* Email verification
* Password reset tokens
* Login history
* Account status
* Last-login timestamps

### NID Management

* Database-level NID uniqueness if required by the application
* NID normalization
* NID validation rules
* Audit history for NID-related updates

### Product Management

* Product ownership
* Inventory transactions
* Product status
* Advanced search indexes
* Category references

### School Management

* Student references
* Teacher references
* Administrative users
* Academic-year information
* Institution status

### Performance

* Pagination
* Query projections
* Aggregation pipelines
* Additional indexes based on real query patterns

---

# 35. Final Database Architecture

The database architecture provides a modular foundation for the MERN application:

```text
                     ┌──────────────┐
                     │   MongoDB    │
                     └──────┬───────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
       users            products           schools
          │                 │                 │
          ▼                 ▼                 ▼
       User.js          Product.js         School.js
          │                 │                 │
          ▼                 ▼                 ▼
   userSchema.js     productSchema.js    schoolSchema.js
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
                            ▼
                    Express Backend
                            │
                            ▼
                     React Frontend
```

The architecture provides a clear separation between schema definitions, compiled models, controller logic, and persistent MongoDB documents.

The combination of Mongoose validation, indexes, password hashing, protected password fields, timestamps, and the documented NID update workflow establishes the foundation for maintainable database development within the MERN project.
