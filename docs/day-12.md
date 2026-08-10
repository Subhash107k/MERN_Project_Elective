# Day 12 — Password Security & Encryption with `bcryptjs`

## 🎯 What Was Learned
* Understood security hazards of storing plaintext passwords in databases.
* Explained cryptographic salts, one-way hash functions, and key stretching.
* Used `bcryptjs` pre-save Mongoose hooks (`pre('save')`) to encrypt passwords automatically.
* Built custom `matchPassword()` instance methods on Mongoose model schemas.

## 🧠 Theory & Concepts
Plaintext passwords must never be written to databases. `bcryptjs` generates unique random cryptographic salts (10 rounds) and executes one-way hashing routines, producing irreversible hash strings (`$2a$10$...`).

## 🔑 Key Takeaways
* **One-Way Hash:** Irreversible cryptographic function converting plaintext to hash output.
* **Salt:** Random data concatenated with passwords to prevent dictionary rainbow table attacks.
* **Mongoose `pre('save')` Hook:** Middleware automatically hashing modified passwords before MongoDB writes.

## 🏗️ Project Structure
* [`../backend/src/schemas/userSchema.js`](../backend/src/schemas/userSchema.js)
* [`../backend/src/models/User.js`](../backend/src/models/User.js)

## ⚙️ Setup & Configuration
Installed `bcryptjs` dependency inside `backend/`:
```bash
cd backend
npm install bcryptjs
```

## 💻 Implementation

### Step 1: Added Bcrypt Pre-Save Hook & Instance Method (`backend/src/schemas/userSchema.js`)
```javascript
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    address: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default userSchema;
```

## 🧪 Testing & Verification
Created a user account. Inspected MongoDB documents via Compass to verify `password` field started with `$2a$10$` instead of plaintext.

## 🔬 Practical Work
Tested `user.matchPassword('wrongpass')` returning `false` and `user.matchPassword('password123')` returning `true`.

## ✅ What Was Completed
* Configured `bcryptjs` password salt & hashing pre-save hook.
* Implemented `matchPassword()` verification instance method.
* Ensured passwords are excluded from default queries via `select: false`.

## ⚠️ Problems Encountered
* Password re-hashed on profile name edit: Occurred when missing `if (!this.isModified('password')) return next();` check.

## 🔧 Troubleshooting & Fixes
Ensured password comparison queries explicitly selected password field (`User.findOne({ email }).select('+password')`). Refer to [Security Report](./security.md).

## 📝 Additional Practice
Verified that `select: false` prevents password strings from leaking in `GET /api/users` responses.

## 📦 Day Deliverable
Encrypted user password pipeline using `bcryptjs` and Mongoose pre-save hooks.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Password encryption verified
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
