module.exports = (str) => {
  if (typeof str !== "string" || str.length > 15 || str.length < 1)
    throw Error("Input argument must be string  1 <= string length <= 15");

  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const strChars = [...str];
  if (!strChars.every((char) => map[char]))
    throw Error("Only the following 'I', 'V', 'X', 'L', 'C', 'D', 'M' characters are expected");

  return strChars.reduce(
    (res, item, idx, arr) => (res += idx === arr.length - 1 || map[item] >= map[str[idx + 1]] ? map[item] : -map[item]),
    0
  );
};
