module.exports = (input) => {
  return input.toString() === [...input.toString()].reverse().join("");
};
