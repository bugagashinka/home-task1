module.exports = (input) => {
  if (typeof input !== "number" || input < -(2 ** 31) || input > 2 ** 31 - 1)
    throw Error("Input argument must be number that satisfy condition  -(2 ** 31) <= number <= 2 ** 31 - 1");

  return input.toString() === [...input.toString()].reverse().join("");
};
