let n = 4;
// let i = 0;
let bool = false;
function powerOfTwo(n) {
  if (n == 1) {
    return true;
  } else if (n < 1) {
    return false;
  }
  return powerOfTwo(n / 2);
}
console.log(powerOfTwo(n));
