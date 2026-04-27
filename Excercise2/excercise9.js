function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (sum, row) => sum + row.reduce((rowSum, value) => rowSum + value, 0),
    0
  );
}

console.log(calculateMatrixSum([[1, 2], [3, 4], [5, 6]]));
