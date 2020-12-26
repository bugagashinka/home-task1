const resolve = require("../task4");
const assert = require("assert");

assert.deepStrictEqual(resolve([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]), [
  2,
  2,
  2,
  1,
  4,
  3,
  3,
  9,
  6,
  7,
  19,
]);
assert.deepStrictEqual(resolve([1], [1]), [1]);
assert.deepStrictEqual(resolve([0, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]), [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
]);
