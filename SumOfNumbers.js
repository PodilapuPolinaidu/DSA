let n = 10;
function sumOfNumbers(n) {
  if (n == 0) {
    return 0;
  }
  return n + sumOfNumbers(n - 1);
}
let sum = sumOfNumbers(n);
console.log(sum);
