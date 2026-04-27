function calculateFactorial(n) {
  if (n < 0) {
    return NaN;
  }

  let factorial = 1;
  for (let i = 2; i <= n; i += 1) {
    factorial *= i;
  }

  return factorial;
}

console.log(calculateFactorial(5));
