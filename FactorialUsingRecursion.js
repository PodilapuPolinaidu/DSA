let n = 5;
function factorialOfNum(n) {
  if (n == 1) {
    return 1;
  }

  return n * factorialOfNum(n - 1);
}

let result = factorialOfNum(n);
console.log(result)