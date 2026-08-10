# Day 04 — MongoDB & Mongoose Schemas

## 🎯 Learning Objectives
* Understand NoSQL document databases vs relational SQL databases.
* Connect Express to MongoDB using Mongoose ODM (`mongoose.connect`).
* Build structured Mongoose schemas with field types and validation constraints.
* Instantiate Mongoose schemas in `schemas/` and compile models in `models/`.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 03](./day-03.md).
* MongoDB installed locally or MongoDB Atlas connection URI available.

## 🧠 Theory
MongoDB is a NoSQL document database storing data as flexible BSON objects. Mongoose is an Object Data Modeling (ODM) library for MongoDB that enforces schema structure, validates data types, handles middleware hooks, and compiles models for database queries.

## 🔑 Key Concepts
* **Mongoose Schema (`new mongoose.Schema()`):** Data layout blueprint enforcing types, rules, and validators.
* **Mongoose Model (`mongoose.model()`):** Constructor wrapper providing query methods (`find`, `create`).
* **Connection Manager (`mongoose.connect()`):** Asynchronous connection initializer.

## 🏗️ Project Structure
* [`../backend/src/config/database.js`](../backend/src/config/database.js)
* [`../backend/src/schemas/userSchema.js`](../backend/src/schemas/userSchema.js)
* [`../backend/src/models/User.js`](../backend/src/models/User.js)

## ⚙️ Installation / Setup
Inside `backend/`, install mongoose:
```bash
cd backend
npm install mongoose
```

## 💻 Step-by-Step Coding

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

### Step 2: Define User Schema (`backend/src/schemas/userSchema.js`)
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

### Step 3: Compile User Model (`backend/src/models/User.js`)
```javascript
import mongoose from 'mongoose';
import userSchema from '../schemas/userSchema.js';

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
```

## 🧪 API / Application Testing
Start server and inspect terminal logs for `MongoDB Connected`.

## 🔬 Practical Lab
Inspect `backend/src/schemas/productSchema.js` and `backend/src/schemas/schoolSchema.js`.

## ✅ Expected Result
Terminal output: `MongoDB Connected: 127.0.0.1`.

## ⚠️ Common Errors
* `MongooseServerSelectionError`: MongoDB service is not running locally.

## 🔧 Troubleshooting
Start MongoDB service via `Start-Service MongoDB` (Windows) or `sudo systemctl start mongod` (Linux). Refer to [Database Documentation](./database.md).

## 📝 Practice Exercise
Add a `category` field with default `'General'` to `productSchema.js`.

## 📦 Daily Deliverable
Connected MongoDB database and defined Mongoose schemas.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
