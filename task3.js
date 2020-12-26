module.exports = (str) => {
  const syms = { "{": "}", "(": ")", "[": "]" };
  let levels = (leaf = []);
  return (
    str.length > 1 &&
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
