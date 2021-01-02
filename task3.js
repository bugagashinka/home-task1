module.exports = (str) => {
  const syms = { "{": "}", "(": ")", "[": "]" };
  let levels = (leaf = []);

  if (typeof str !== "string" || str.length > 104 || str.length < 1)
    throw Error("Input argument must be string 1 <= length <= 104");
  const validSymsSet = new Set([...Object.keys(syms), ...Object.values(syms)]);
  if (![...str].every((char) => validSymsSet.has(char)))
    throw Error("String must consists of parentheses only '()[]{}'");

  return (
    str.length >= 1 &&
    str.length % 2 === 0 &&
    [...str].every((item) => {
      if (item in syms) {
        return levels.push((leaf = [item]));
      } else {
        return syms[leaf[0]] === item ? (leaf = levels[--levels.length - 1]) || true : false;
      }
    })
  );
};
