let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// function removeDuplicates(arr) {
//   let pos = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[pos]){
//       pos = pos + 1;
//       arr[pos] = arr[i]
//     }
//   }
//   return arr;
// }

// let result = removeDuplicates(arr);
// console.log(result);

// Method 2

function removeDuplicates(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      arr[pos] = arr[i];
      pos++;
    }

    // console.log(pos)
  }

  return pos;
}

console.log(removeDuplicates(arr));

