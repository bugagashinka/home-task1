module.exports = (str) => {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return [...str].reduce(
    (res, item, idx, arr) => (res += idx === arr.length - 1 || map[item] >= map[str[idx + 1]] ? map[item] : -map[item]),
    0
  );
};
