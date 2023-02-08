/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//     const uniqueNum = new Set(nums);
//     return uniqueNum.size !== nums.length;
// };

var containsDuplicate = function (nums) {
    const foundNums = new Map();
    for (let num of nums) {
        if (foundNums.has(num)) {
            return true;
        } else foundNums.set(num);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));