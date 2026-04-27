function calculateMatrixSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

console.log(calculateMatrixSum([[1, 2], [3, 4], [5, 6]]));
