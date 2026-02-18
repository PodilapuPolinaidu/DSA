let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

let n = nums2.length;
let m = nums1.length - n;

// function MergeArray(n1, n2) {
//   let n1Copy = n1.slice(0, m);
//   let x = 0;
//   let y = 0;
//   console.log(n1Copy);
//   for (let i = 0; i < m + n; i++) {
//     if (y >= n || (x < m && n1Copy[x] < n2[y])) {
//       n1[i] = n1Copy[x];
//       x++;
//     } else {
//       n1[i] = n2[y];
//       y++;
//     }
//   }

//   console.log(n1);
// }

function MergeArray(n1, n2) {
  let x = m - 1;
  let y = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (y < 0) {
      break;
    }
    if (x >= 0 && n1[x] > n2[y]) {
      n1[i] = n1[x];
      x--;
    } else {
      n1[i] = n2[y];
      y--;
    }
  }
  console.log(n1);
}

MergeArray(nums1, nums2);
