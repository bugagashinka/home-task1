const resolve = require("../task3");
const assert = require("assert");

// Positive tests
assert.strictEqual(resolve("()"), true);
assert.strictEqual(resolve("()[]{}"), true);
assert.strictEqual(resolve("(]"), false);
assert.strictEqual(resolve("([)]"), false);
assert.strictEqual(resolve("{[]}"), true);
assert.strictEqual(resolve("{[]"), false);
assert.strictEqual(resolve("{"), false);
assert.strictEqual(
  resolve("{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"),
  true
);

// Negative tests
assert.throws(
  () =>
    resolve(
      "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"
    ),
  {
    name: "Error",
    message: "Input argument must be string 1 <= length <= 104",
  }
);
assert.throws(() => resolve(""), {
  name: "Error",
  message: "Input argument must be string 1 <= length <= 104",
});
assert.throws(() => resolve("[]{<>}"), {
  name: "Error",
  message: "String must consists of parentheses only '()[]{}'",
});
