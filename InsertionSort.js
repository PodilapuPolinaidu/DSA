let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let pre = i - 1;
    while (arr[pre] > cur && pre >= 0) {
      arr[pre + 1] = arr[pre];
      pre--;
    }
    arr[pre + 1] = cur;
  }

  return arr;
}
let res = insertionSort(arr);
console.log(res);
