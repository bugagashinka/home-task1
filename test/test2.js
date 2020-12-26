const resolve = require("../task2");
const assert = require("assert");

assert.strictEqual(resolve(121), true);
assert.strictEqual(resolve(-121), false);
assert.strictEqual(resolve(10), false);
assert.strictEqual(resolve(2), true);
assert.strictEqual(resolve(-2), false);
assert.strictEqual(resolve((-2) ** 31), false);
assert.strictEqual(resolve(2 ** 31 - 1), false);
