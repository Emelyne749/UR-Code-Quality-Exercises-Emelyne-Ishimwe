function removeDuplicates(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
