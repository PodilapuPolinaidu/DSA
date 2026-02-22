let n = 8;
function fibnoccoNumber(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fibnoccoNumber(n - 1) + fibnoccoNumber(n - 2);
}
let res = fibnoccoNumber(n);
console.log(res);
