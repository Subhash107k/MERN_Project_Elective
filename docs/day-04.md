# Day 4 — MongoDB & Mongoose Schemas

## Learning Objectives
* Understand NoSQL document databases vs traditional relational SQL databases.
* Connect Node.js applications to MongoDB using the Mongoose ODM (Object Data Modeling) library.
* Define Mongoose Schemas, data types, constraints, and custom validation error messages.
* Export Mongoose Models (`mongoose.model()`) for database operations.

## What We Learn
Today we introduce database persistence. We learn how MongoDB stores data as flexible BSON documents and how Mongoose enforces structure, type validation, and required field rules at the application layer.

## Why We Learn It
Without a database model, raw JSON input cannot be validated or stored permanently. Mongoose schemas prevent corrupt or incomplete data from reaching MongoDB collections.

## Important Concepts
* **Mongoose Schema:** Structural blueprint defining document fields, data types (`String`, `Number`, `Boolean`), defaults, and validators.
* **Mongoose Model:** A wrapper constructor compiled from a Schema, providing database query methods (`create`, `find`, `findById`).
* **Environment Connection String (`MONGO_URI`):** The network connection string used to connect to a local or cloud MongoDB cluster.

## Project Files
* [`backend/src/config/database.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/config/database.js)
* [`backend/src/models/User.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/models/User.js)
* [`backend/src/models/Product.js`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/src/models/Product.js)

## Step-by-Step Explanation
1. Define database connection logic in `config/database.js` using `mongoose.connect(process.env.MONGO_URI)`.
2. Define a Mongoose schema: `const userSchema = new mongoose.Schema({ name: { type: String, required: true } });`.
3. Compile the schema into a model: `const User = mongoose.model('User', userSchema);`.
4. Export the model for use in controllers.

## Code Examples
```javascript
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Product name is required'] },
    price: { type: Number, required: [true, 'Price is required'], min: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
```

## Practical Exercise
1. Ensure your local MongoDB service is running (or configure a free MongoDB Atlas connection string in `.env`).
2. Run `npm run dev` in `backend/`.
3. Check the terminal to confirm the message `MongoDB Connected: localhost` appears.

## Common Errors
* **`MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017`**: MongoDB service is not running on your machine. Start MongoDB service or verify connection URI.

## How to Debug
Wrap `mongoose.connect()` in a `try...catch` block and log `error.message` to diagnose database connectivity issues.

## Homework
Add a `category` field of type `String` with default value `'General'` to `Product.js`.

## Expected Result
Server connects cleanly to MongoDB and registers schemas without validation runtime errors.

## Interview Questions
1. *What is the difference between a Mongoose Schema and a Mongoose Model?*
2. *How do timestamps (`timestamps: true`) work in Mongoose schemas?*

## Day Summary
You have connected Express to MongoDB and established schema models with data validation constraints.
