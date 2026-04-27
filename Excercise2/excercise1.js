function calculateAverage(numbers) {
  return numbers.reduce((sum, number)=>sum+number,0)/numbers.length;
}

console.log(calculateAverage([1,3]))