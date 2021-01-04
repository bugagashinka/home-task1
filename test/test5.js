const resolve = require("../task5");
const assert = require("assert");

// Positive tests
assert.strictEqual(resolve([1, 3, 5, 6], 5), 2);
assert.strictEqual(resolve([1, 3, 5, 6], 2), 1);
assert.strictEqual(resolve([1, 3, 5, 6], 7), 4);
assert.strictEqual(resolve([1, 3, 5, 6], 0), 0);
assert.strictEqual(resolve([1], 0), 0);

// Negative tests
assert.throws(() => resolve(1, 0), {
  name: "Error",
  message: "Function arguments should be 'array' and 'number' in the following sequence",
});
assert.throws(() => resolve([1], ""), {
  name: "Error",
  message: "Function arguments should be 'array' and 'number' in the following sequence",
});
