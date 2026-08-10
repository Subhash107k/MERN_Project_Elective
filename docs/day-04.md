# Day 04 — MongoDB & Mongoose Schemas

## 🎯 What Was Learned
* Understood NoSQL document database concepts vs traditional SQL databases.
* Connected Node.js/Express to MongoDB using Mongoose ODM (`mongoose.connect`).
* Built structured Mongoose schemas with data types, required rules, and default values.
* Defined schemas in `schemas/` and compiled Mongoose models in `models/`.

## 🧠 Theory & Concepts
MongoDB is a NoSQL document database storing data as BSON objects. Mongoose is an Object Data Modeling (ODM) library for MongoDB that enforces schema structure, validates data types, handles middleware hooks, and compiles query models.

## 🔑 Key Takeaways
* **Mongoose Schema (`new mongoose.Schema()`):** Data layout blueprint enforcing types, required constraints, and default values.
* **Mongoose Model (`mongoose.model()`):** Constructor wrapper providing query methods (`find`, `create`).
* **Connection Manager (`mongoose.connect()`):** Asynchronous database connection initializer.

## 🏗️ Project Structure
* [`../backend/src/config/database.js`](../backend/src/config/database.js)
* [`../backend/src/schemas/userSchema.js`](../backend/src/schemas/userSchema.js)
* [`../backend/src/models/User.js`](../backend/src/models/User.js)

## ⚙️ Setup & Configuration
Installed Mongoose ODM dependency inside `backend/`:
```bash
cd backend
npm install mongoose
```

## 💻 Implementation

### Step 1: Database Connection Module (`backend/src/config/database.js`)
```javascript
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mern_course');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
```

### Step 2: Defined User Schema (`backend/src/schemas/userSchema.js`)
```javascript
import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6, select: false },
    address: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true });

export default userSchema;
```

### Step 3: Compiled User Model (`backend/src/models/User.js`)
```javascript
import mongoose from 'mongoose';
import userSchema from '../schemas/userSchema.js';

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
```

## 🧪 Testing & Verification
Started the Express server and verified `MongoDB Connected` was logged to terminal.

## 🔬 Practical Work
Constructed `productSchema.js` and `schoolSchema.js` inside `backend/src/schemas/` and compiled models in `backend/src/models/`.

## ✅ What Was Completed
* Established Mongoose MongoDB connection.
* Created pure schema declarations in `backend/src/schemas/`.
* Compiled query models in `backend/src/models/`.

## ⚠️ Problems Encountered
* `MongooseServerSelectionError`: Occurred when local MongoDB service was not running.

## 🔧 Troubleshooting & Fixes
Started MongoDB service locally via `Start-Service MongoDB` (Windows) or `sudo systemctl start mongod` (Linux). Refer to [Database Documentation](./database.md).

## 📝 Additional Practice
Added a `category` field with default `'General'` to `productSchema.js`.

## 📦 Day Deliverable
Connected MongoDB database and defined Mongoose schemas/models.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Server executed successfully
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
