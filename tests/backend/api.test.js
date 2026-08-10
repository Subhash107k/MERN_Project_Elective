import assert from 'assert';
import { asyncHandler } from '../../backend/src/utils/asyncHandler.js';
import { sendSuccess, sendError } from '../../backend/src/utils/response.js';

console.log('🧪 Running Backend Integration & Unit Tests...');

// Mock Response Object
const createMockRes = () => {
    const res = {
        statusCode: 200,
        jsonData: null,
        status(code) {
            this.statusCode = code;
            return this;
        },
        json(data) {
            this.jsonData = data;
            return this;
        }
    };
    return res;
};

// Test 1: Utility Response Helpers
try {
    const res1 = createMockRes();
    sendSuccess(res1, 200, 'Test Success', { id: 1 });
    assert.strictEqual(res1.statusCode, 200);
    assert.strictEqual(res1.jsonData.success, true);
    assert.strictEqual(res1.jsonData.message, 'Test Success');
    assert.strictEqual(res1.jsonData.data.id, 1);
    console.log('✅ PASS: sendSuccess helper test');
} catch (err) {
    console.error('❌ FAIL: sendSuccess helper test', err);
    process.exit(1);
}

// Test 2: Error Response Helper
try {
    const res2 = createMockRes();
    sendError(res2, 400, 'Bad Request');
    assert.strictEqual(res2.statusCode, 400);
    assert.strictEqual(res2.jsonData.success, false);
    assert.strictEqual(res2.jsonData.message, 'Bad Request');
    console.log('✅ PASS: sendError helper test');
} catch (err) {
    console.error('❌ FAIL: sendError helper test', err);
    process.exit(1);
}

// Test 3: Async Handler Middleware
try {
    const asyncFn = asyncHandler(async (req, res, next) => {
        res.status(201).json({ success: true });
    });
    const res3 = createMockRes();
    asyncFn({}, res3, () => {});
    setTimeout(() => {
        assert.strictEqual(res3.statusCode, 201);
        console.log('✅ PASS: asyncHandler middleware test');
        console.log('\n🎉 ALL BACKEND TESTS PASSED SUCCESSFULLY!');
    }, 100);
} catch (err) {
    console.error('❌ FAIL: asyncHandler middleware test', err);
    process.exit(1);
}
