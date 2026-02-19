let arr = [0, 1, 0, 3, 12];

function moveZores(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x++;
     
    }
  }
  console.log(arr, x);
}

moveZores(arr);
