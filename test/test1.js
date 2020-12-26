const resolve = require("../task1.js");
const assert = require("assert");

assert.strictEqual(resolve("III"), 3);
assert.strictEqual(resolve("VI"), 6);
assert.strictEqual(resolve("IV"), 4);
assert.strictEqual(resolve("IX"), 9);
assert.strictEqual(resolve("LVIII"), 58);
assert.strictEqual(resolve("MCMXCIV"), 1994);
assert.strictEqual(resolve("M"), 1000);
assert.notStrictEqual(resolve("M"), 500);
assert.strictEqual(resolve("MMMCMXCIX"), 3999);
