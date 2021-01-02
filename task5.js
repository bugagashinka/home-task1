module.exports = (nums, target) => {
  if (!Array.isArray(nums) || typeof target !== "number")
    throw Error("Function arguments should be 'array' and 'number' in the following sequence");

  const res = nums.findIndex((num) => num - target >= 0);
  return res >= 0 ? res : nums.length;
};
