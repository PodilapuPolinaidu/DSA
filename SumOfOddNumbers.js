let arr = [5, 3, 2, 0, 1];
function sumOfOdd(n) {
  if (arr[n] % 2 != 0) {
    if (n == 0) {
      return arr[n];
    }

    return arr[n] + sumOfOdd(n - 1);
  } else {
    return 0 + sumOfOdd(n - 1);
  }
}

let res = sumOfOdd(arr.length - 1);
console.log(res);
