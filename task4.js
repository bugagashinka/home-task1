module.exports = (arr1, arr2) => {
  const arr1Map = arr1.reduce((map, item) => map.set(item, map.has(item) ? map.get(item) + 1 : 1), new Map());

  const res = arr2.reduce((res, item) => {
    const size = arr1Map.get(item);
    arr1Map.delete(item);
    return res.concat(Array(size).fill(item));
  }, []);
  return res.concat(...arr1Map.keys());
};
