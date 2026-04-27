function getNestingLevel(value) {
  if (!Array.isArray(value)) return 0;
  return 1 + Math.max(0, ...value.map(getNestingLevel));
}

function flattenArray(array) {
  return array.reduce((result, item) => {
    return Array.isArray(item) ? result.concat(flattenArray(item)) : result.concat(item);
  }, []);
}

const nested = [1, [2, [3, 4], 5], [[6]], 7];
console.log(getNestingLevel(nested)); // 3
console.log(flattenArray(nested)); // [1,2,3,4,5,6,7]
