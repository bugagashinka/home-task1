const resolve = require("../task2");
const assert = require("assert");

// Positive tests
assert.strictEqual(resolve(121), true);
assert.strictEqual(resolve(-121), false);
assert.strictEqual(resolve(10), false);
assert.strictEqual(resolve(2), true);
assert.strictEqual(resolve(-2), false);
assert.strictEqual(resolve((-2) ** 31), false);
assert.strictEqual(resolve(2 ** 31 - 1), false);

// Negative tests
assert.throws(() => resolve("asdad"), {
  name: "Error",
  message: "Input argument must be number",
});
assert.throws(() => resolve((-2) ** 31 - 1), {
  name: "Error",
  message: "Input argument must satisfy next constraints -(2 ** 31) <= number <= 2 ** 31 - 1",
});
assert.throws(() => resolve(2 ** 31), {
  name: "Error",
  message: "Input argument must satisfy next constraints -(2 ** 31) <= number <= 2 ** 31 - 1",
});
