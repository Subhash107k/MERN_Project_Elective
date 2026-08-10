# Day 14 — Validation, Security & Automated Testing

## 🎯 What Was Learned
* Validated incoming request payloads via Express validation middleware (`validationMiddleware.js`).
* Protected Express backend servers against OWASP top security risks (XSS, Injection).
* Wrote and executed automated backend API unit and integration tests using Node test runners.
* Executed automated frontend component configuration assertions.

## 🧠 Theory & Concepts
Automated testing programmatically executes assertions (`assert.strictEqual`) against backend helper functions and API handlers, verifying code correctness automatically on every build.

## 🔑 Key Takeaways
* **Input Validation:** Rejecting invalid email formats or short passwords before database queries.
* **Node Test Runner:** Built-in test execution engine (`node --test` or `node script.js`).
* **Assertions:** Verification conditions asserting expected outputs match actual outputs.

## 🏗️ Project Structure
* [`../backend/src/middleware/validationMiddleware.js`](../backend/src/middleware/validationMiddleware.js)
* [`../tests/backend/api.test.js`](../tests/backend/api.test.js)
* [`../tests/frontend/components.test.js`](../tests/frontend/components.test.js)

## ⚙️ Setup & Configuration
No extra test packages required (uses Node's native `node:assert` module).

## 💻 Implementation

### Step 1: Created Validation Middleware (`backend/src/middleware/validationMiddleware.js`)
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

## 🧪 Testing & Verification
Ran backend and frontend test runners from root terminal:
```bash
cd backend && npm test
cd ../frontend && npm test
```

## 🔬 Practical Work
Added an assertion in `api.test.js` checking `asyncHandler` error forwarding.

## ✅ What Was Completed
* Implemented payload validation middleware.
* Constructed automated backend API test runner.
* Executed automated assertions with 100% passing results.

## ⚠️ Problems Encountered
* `AssertionError`: Occurred when test assertion condition evaluated to false.

## 🔧 Troubleshooting & Fixes
Inspected assertion diffs to correct function output logic. Refer to [Testing Guide](./testing.md).

## 📝 Additional Practice
Added input validation asserting phone numbers contain only numeric digits.

## 📦 Day Deliverable
Validation middleware and passing automated test runners.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code implemented
- [ ] Automated tests executed successfully
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
