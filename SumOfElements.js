let arr = [5, 3, 2, 0, 1];
// let i = 0;
// function sumOfElements(i) {
//   if (i == arr.length - 1) {
//     return arr[i];
//   }
//   // i = i + 1;
//   return arr[i] + sumOfElements(i + 1);
// }

function sumOfElements(n) {
  if (n == 0) {
    return arr[0];
  }

  return arr[n] + sumOfElements(n - 1);
}
let res = sumOfElements(arr.length - 1);
console.log(res);
