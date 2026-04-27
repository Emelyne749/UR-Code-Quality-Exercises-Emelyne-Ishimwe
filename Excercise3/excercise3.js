function recursiveSum(array) {
  if (array.length === 0) return 0;
  const [first, ...rest] = array;
  return first + recursiveSum(rest);
}

console.log(recursiveSum([1, 2, 3, 4, 5])); // 15
