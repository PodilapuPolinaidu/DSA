let number = -456;
function revrseNumber(n) {
  let temp = n;
  let rev = 0;

  temp = Math.abs(temp);
  while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }

  return n < 0 ? -rev : rev;
}

let result = revrseNumber(number);
console.log(result);
