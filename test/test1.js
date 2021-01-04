const resolve = require("../task1.js");
const assert = require("assert");

// Positive tests
assert.strictEqual(resolve("III"), 3);
assert.strictEqual(resolve("VI"), 6);
assert.strictEqual(resolve("IV"), 4);
assert.strictEqual(resolve("IX"), 9);
assert.strictEqual(resolve("LVIII"), 58);
assert.strictEqual(resolve("MCMXCIV"), 1994);
assert.strictEqual(resolve("M"), 1000);
assert.notStrictEqual(resolve("M"), 500);
assert.strictEqual(resolve("MMMCMXCIX"), 3999);

// Negative tests
assert.throws(() => resolve(1), {
  name: "Error",
  message: "Input argument must be string",
});
assert.throws(() => resolve(""), {
  name: "Error",
  message: "Input argument must satisfy next constraints 1 <= input length <= 15",
});
assert.throws(() => resolve("IIIIIIIIIXIIIIIIIIIX"), {
  name: "Error",
  message: "Input argument must satisfy next constraints 1 <= input length <= 15",
});
assert.throws(() => resolve("HI"), {
  name: "Error",
  message: "Only the following 'I', 'V', 'X', 'L', 'C', 'D', 'M' characters are expected",
});
