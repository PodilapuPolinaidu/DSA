// 1. Count number of digits in a number

// Method 1
// let number = 45678;
// function CountDigits(n) {
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// }

// let result = CountDigits(number);
// console.log(result);

// Method 2
let number = 45678;
function CountDigits(n) {
  let count = 0;
let strNum = n.toString().length;
  return strNum;
}

let result = CountDigits(number);
console.log(result);
