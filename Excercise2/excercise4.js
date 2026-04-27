function findEvenNumbers(numbers) {
  return numbers.filter(number=>number % 2 === 0);
}

console.log(findEvenNumbers([2,4,3,6,7,5,0]))