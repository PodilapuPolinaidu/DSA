let arr = [1,2,3];

function moveZores(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

let result = moveZores(arr);

console.log(result);
