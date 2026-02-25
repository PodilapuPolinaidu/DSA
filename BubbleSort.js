let arr = [5, 2, 4, 1];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tem;
      }
    }
    if (!isSwapped) break;
  }
  console.log(arr);
}
bubbleSort(arr);
