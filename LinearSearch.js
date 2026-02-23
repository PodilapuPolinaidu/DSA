let arr = [4, 9, 1, 0, 2];
let target = 7;
function searchEle(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(searchEle(arr, target));
