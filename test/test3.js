const resolve = require("../task3");
const assert = require("assert");

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
