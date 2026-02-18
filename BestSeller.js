let prices = [1, 3, 5, 7, 2, 12, 8, 10];
// function bestProfit(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] - arr[i] > max) {
//         max = arr[j] - arr[i];
//       }
//     }
//   }
//   return max;
// }

// let result = bestProfit(prices);

// console.log(result);

function bestProfit(arr) {
  let maxProfit = 0;
  let minPrice = arr[0];
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice;
    }
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }
  }
  console.log(maxProfit);
}

bestProfit(prices);
