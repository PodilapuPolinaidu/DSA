let arr = [0, 1];
// function missingNumber(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     let found = false;
//     for (let j = 0; j < arr.length; j++) {
//       if (i == arr[j]) {
//         found = true;
//       }
//     }
//     if (!found) {
//       return i;
//     }
//   }
// }

function missingNumber(arr) {
  let n = arr.length;
  let sum = (n * (n + 1)) / 2;
  let arraySum = 0;
  for (let i = 0; i < n; i++) {
    arraySum += arr[i];
  }
  if (arraySum < sum) {
    return sum - arraySum;
  }
}
let result = missingNumber(arr);
console.log(result);
