let number = 8;
function isPalindrome(n) {
  if (n < 0) {
    return false;
  }
  let temp = n;
  let dec = 0;

  while (temp > 0) {
    let remainder = temp % 10;
    dec = dec * 10 + remainder;
    temp = Math.floor(temp / 10);
  }
  return n == dec ? true : false;
}
let result = isPalindrome(number);
console.log(result);
