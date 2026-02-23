let arr = [7];
let target = 7;
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  // let mid = Math.floor((left + right) / 2);
  // if (target == arr[mid]) {
  //   return mid;
  // } else if (target > arr[mid]) {
  //   left = mid + 1;
  // } else {
  //   // left = 0;
  //   right = mid - 1;
  // }
  // for (let i = left; i < right; i++) {
  //   if (arr[i] == target) {
  //     return i;
  //   }
  // }

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (target == arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, target));
