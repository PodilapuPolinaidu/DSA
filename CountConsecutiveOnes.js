let arr = [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1];
function countOnes(arr) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count = 0;
    } else {
      count++;
      if (count > max) {
        max = count;
      }
    }
  }
  return max;
}
let result = countOnes(arr);
console.log(result);
