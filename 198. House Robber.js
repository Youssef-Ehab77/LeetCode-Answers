/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
   if (nums.length === 0) return 0;
   if (nums.length === 1) return nums[0];
   if (nums.length === 2) return Math.max(nums[1], nums[0]);

   let maxTwoBefore = nums[0];
   let maxOneBefore = Math.max(nums[0], nums[1]);
   let currentMax = 0;
   for (let i = 2; i < nums.length; i++) {
      currentMax = Math.max(nums[i] + maxTwoBefore, maxOneBefore);

      maxTwoBefore = maxOneBefore;
      maxOneBefore = currentMax;
   }
   return currentMax;
};


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// const memo = []

// var rob = function (nums) {
//    memo.length = nums.length;
//    memo.fill(-1)
//    return robVal(nums, nums.length - 1)
// };

// function robVal(nums, i) {
//    if (i < 0)
//       return 0;

//    if (memo[i] >= 0)
//       return memo[i];

//    let result = Math.max(robVal(nums, i - 2) + nums[i], robVal(nums, i - 1));
//    memo[i] = result;
//    return result;
// }

