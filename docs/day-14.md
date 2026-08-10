# Day 14 — Validation, Security & Automated Testing

## 🎯 Learning Objectives
* Validate incoming request payloads via Express validation middleware (`validationMiddleware.js`).
* Protect Express backend servers against OWASP top security risks (XSS, Injection).
* Write and execute automated backend API unit and integration tests using Node test runners.
* Execute automated frontend component configuration assertions.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 13](./day-13.md).

## 🧠 Theory
Automated testing programmatically executes assertions (`assert.strictEqual`) against backend helper functions and API handlers, verifying code correctness automatically on every build.

## 🔑 Key Concepts
* **Input Validation:** Rejecting invalid email formats or short passwords before database queries.
* **Node Test Runner:** Built-in test execution engine (`node --test` or `node script.js`).
* **Assertions:** Verification conditions asserting expected outputs match actual outputs.

## 🏗️ Project Structure
* [`../backend/src/middleware/validationMiddleware.js`](../backend/src/middleware/validationMiddleware.js)
* [`../tests/backend/api.test.js`](../tests/backend/api.test.js)
* [`../tests/frontend/components.test.js`](../tests/frontend/components.test.js)

## ⚙️ Installation / Setup
No extra test packages required (uses Node's native `node:assert` module).

## 💻 Step-by-Step Coding

### Step 1: Create Validation Middleware (`backend/src/middleware/validationMiddleware.js`)
```javascript
export const validateUserBody = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password || password.length < 6) {
        res.status(400);
        throw new Error('Validation Error: Invalid or missing user payload fields');
    }
    next();
};
```

### Step 2: Automated Backend Test Script (`tests/backend/api.test.js`)
```javascript
import assert from 'node:assert';
import { sendSuccess, sendError } from '../../backend/src/utils/response.js';

const mockRes = {
    statusCode: 0,
    jsonPayload: null,
    status(code) { this.statusCode = code; return this; },
    json(data) { this.jsonPayload = data; return this; }
};

sendSuccess(mockRes, 200, 'Success', { id: 1 });
assert.strictEqual(mockRes.statusCode, 200);
assert.strictEqual(mockRes.jsonPayload.success, true);

sendError(mockRes, 400, 'Error');
assert.strictEqual(mockRes.statusCode, 400);
assert.strictEqual(mockRes.jsonPayload.success, false);

console.log('✅ ALL BACKEND TESTS PASSED SUCCESSFULLY!');
```

## 🧪 API / Application Testing
Run backend and frontend tests from root terminal:
```bash
cd backend && npm test
cd ../frontend && npm test
```

## 🔬 Practical Lab
Add an assertion in `api.test.js` checking `asyncHandler` error forwarding.

## ✅ Expected Result
Terminal outputs `🎉 ALL BACKEND TESTS PASSED SUCCESSFULLY!`.

## ⚠️ Common Errors
* `AssertionError`: Test assertion condition evaluated to false.

## 🔧 Troubleshooting
Inspect assertion diffs to correct function output logic. Refer to [Testing Guide](./testing.md).

## 📝 Practice Exercise
Add input validation asserting phone numbers contain only numeric digits.

## 📦 Daily Deliverable
Validation middleware and passing automated test runners.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
