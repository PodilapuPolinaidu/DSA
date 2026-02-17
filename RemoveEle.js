let arr = [3, 2, 2, 3];
let val = 3;
function RemoveElement(arr, val) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[pos] = arr[i];
      pos = pos + 1;
    }
  }

  return arr;
}

let result = RemoveElement(arr, val);
console.log(result);
