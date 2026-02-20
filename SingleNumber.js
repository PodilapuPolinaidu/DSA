let arr = [2, 2, 1, 1, 3];

function singleNUmber(arr) {
  let count = 1;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) {
      count++;
      map[arr[i]] = count;
    } else {
      count = 1;
      map[arr[i]] = count;
    }
  }
  console.log(map);
  for (let [key, val] of Object.entries(map)) {
    if (val == 1) {
      console.log(key);
      return key;
    }
  }
}

singleNUmber(arr);
