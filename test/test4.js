const resolve = require("../task4");
const assert = require("assert");

// Positive tests
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
assert.deepStrictEqual(resolve([0], [0]), [0]);
assert.deepStrictEqual(resolve([1000], [1000]), [1000]);
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

// Negative tests
assert.throws(() => resolve(1, [1]), {
  name: "Error",
  message: "Each input argument must be array",
});
assert.throws(() => resolve([1], ""), {
  name: "Error",
  message: "Each input argument must be array",
});

assert.throws(() => resolve([-1], [-1]), {
  name: "Error",
  message: "0 <= arr1[i], arr2[i] <= 1000",
});
assert.throws(() => resolve([-1, 2], [2]), {
  name: "Error",
  message: "0 <= arr1[i], arr2[i] <= 1000",
});
assert.throws(() => resolve([1001], [1001]), {
  name: "Error",
  message: "0 <= arr1[i], arr2[i] <= 1000",
});
assert.throws(() => resolve([1, 2, 3], [1, 2, 1]), {
  name: "Error",
  message: "All the elements of arr2 must be distinct",
});
assert.throws(() => resolve([1, 2, 3], [1, 2, 4]), {
  name: "Error",
  message: "Each arr2[i] must be in arr1",
});
assert.throws(() => resolve([], [1, 2, 4]), {
  name: "Error",
  message: "1 <= arr1.length, arr2.length <= 1000",
});
assert.throws(() => resolve([1, 2, 3], []), {
  name: "Error",
  message: "1 <= arr1.length, arr2.length <= 1000",
});
assert.throws(() => resolve([1, 2, 3], Array(1001).fill(1)), {
  name: "Error",
  message: "1 <= arr1.length, arr2.length <= 1000",
});
assert.throws(() => resolve(Array(1001).fill(1), [1, 2, 3]), {
  name: "Error",
  message: "1 <= arr1.length, arr2.length <= 1000",
});
