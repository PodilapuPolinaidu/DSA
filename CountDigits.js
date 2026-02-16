// 1. Count number of digits in a number

// Method 1
let number = -545678;
function CountDigits(n) {
  let count = 0;
  if(n == 0){
    return 1
  }
  else if(n < 0){
    n = Math.abs(n)
  }
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}


// Method 2
// let number = 45678;
// function CountDigits(n) {
//   let count = 0;
//   let strNum = n.toString().length;
//   return strNum;
// }

let result = CountDigits(number);
console.log(result);
