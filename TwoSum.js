let nums = [2, 7, 11, 15],
  target = 9;
function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (map.hasOwnProperty(x)) {
      return [map[x], i];
    }
    map[nums[i]] = i;
  }
}

let result = twoSum(nums, target);
console.log(result);
