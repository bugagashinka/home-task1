module.exports = (nums, target) => {
  const res = nums.findIndex((num) => num - target >= 0);
  return res >= 0 ? res : nums.length;
};
