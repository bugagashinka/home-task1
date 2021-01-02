module.exports = (arr1, arr2) => {
  if (arr1.length < 1 || arr2.length < 1 || arr1.length > 1000 || arr2.length > 1000)
    throw Error("1 <= arr1.length, arr2.length <= 1000");
  if (arr2.length !== new Set(arr2).size) throw Error("All the elements of arr2 must be distinct");

  const checkItem = (i) => {
    if (i >= 0 && i <= 1000) return true;
    throw Error("0 <= arr1[i], arr2[i] <= 1000");
  };

  const arr1Map = arr1.reduce(
    (map, item) => checkItem(item) && map.set(item, map.has(item) ? map.get(item) + 1 : 1),
    new Map()
  );

  const res = arr2.reduce((res, item) => {
    if (!arr1Map.get(item)) throw Error("Each arr2[i] must be in arr1");
    checkItem(item);

    const size = arr1Map.get(item);
    arr1Map.delete(item);
    return res.concat(Array(size).fill(item));
  }, []);
  return res.concat(...arr1Map.keys());
};
