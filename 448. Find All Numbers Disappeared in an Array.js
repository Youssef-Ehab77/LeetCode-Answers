/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let l = nums.length;
    let myArr = Array(l);
    let output = [];

    for (let i = 0; i < l; i++)
        myArr[nums[i]] = 1;

    for (let i = 1; i <= l; i++) {
        if (myArr[i] === undefined) output.push(i);
    }
    return output;
};

console.log(findDisappearedNumbers([1, 1]));

//var findDisappearedNumbers = function(nums) {
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         let num = Math.abs(nums[i]);
//         let idx = num-1;
//         nums[idx] = Math.abs(nums[idx]) * -1;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) res.push(i+1);
//     }
//     return res;
// };