# Day 12 — Password Security & Encryption with `bcryptjs`

## 🎯 Learning Objectives
* Understand security hazards of plaintext password storage.
* Explain cryptographic salts, one-way hash functions, and key stretching.
* Use `bcryptjs` pre-save Mongoose hooks (`pre('save')`) to encrypt passwords automatically.
* Build custom `matchPassword()` instance methods on Mongoose model schemas.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 11](./day-11.md).

## 🧠 Theory
Plaintext passwords must never be written to databases. `bcryptjs` generates unique random cryptographic salts (10 rounds) and executes one-way hashing routines, producing irreversible hash strings (`$2a$10$...`).

## 🔑 Key Concepts
* **One-Way Hash:** Irreversible cryptographic function converting plaintext to hash output.
* **Salt:** Random data concatenated with passwords to prevent dictionary rainbow table attacks.
* **Mongoose `pre('save')` Hook:** Middleware automatically hashing modified passwords before MongoDB writes.

## 🏗️ Project Structure
* [`../backend/src/schemas/userSchema.js`](../backend/src/schemas/userSchema.js)
* [`../backend/src/models/User.js`](../backend/src/models/User.js)

## ⚙️ Installation / Setup
Inside `backend/`:
```bash
npm install bcryptjs
```

## 💻 Step-by-Step Coding

### Step 1: Add Bcrypt Pre-Save Hook & Instance Method (`backend/src/schemas/userSchema.js`)
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

## 🧪 API / Application Testing
Create a user account. Inspect MongoDB documents via Compass to verify `password` field starts with `$2a$10$` instead of plaintext.

## 🔬 Practical Lab
Test `user.matchPassword('wrongpass')` returning `false` and `user.matchPassword('password123')` returning `true`.

## ✅ Expected Result
User passwords stored in MongoDB are irreversibly encrypted hash strings.

## ⚠️ Common Errors
* Password re-hashed on profile name edit: Missing `if (!this.isModified('password')) return next();` check.

## 🔧 Troubleshooting
Ensure password comparison queries explicitly select password field (`User.findOne({ email }).select('+password')`). Refer to [Security Report](./security.md).

## 📝 Practice Exercise
Verify that `select: false` prevents password strings from leaking in `GET /api/users` responses.

## 📦 Daily Deliverable
Encrypted user password pipeline using `bcryptjs` and Mongoose pre-save hooks.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
