/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let h = {};
  let diff;
  for(let i = 0; i < nums.length; i++){
    diff = target - nums[i];
    if (h[diff] != undefined) {
      return [h[diff], i];
    }
    h[nums[i]] = i;
  }

  return [];
};
