/**
 * https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
 * @TimeAndSpaceComplexity : O(n) time and O(1) space
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sumLeft = 0;
    let sumRight = 0;
    nums.forEach(num => sumLeft += num);

    for (let i in nums) {
        sumLeft -= nums[i];
        if (sumLeft === sumRight)
            return i;
        sumRight += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([2, 1, -1]))

//another solution also O(n) time but O(n) space
// let arrLeft = [];
// let arrRight = [];
// arrLeft[0] = nums[0];
// arrRight[nums.length - 1] = nums[nums.length - 1];
//
// for (let i = 1; i < nums.length; i++) {
//     arrLeft[i] = nums[i] + arrLeft[i - 1];
//     arrRight[nums.length - 1 - i] = nums[nums.length - i - 1] + arrRight[nums.length - i];
// }
//
// for (let i = 0; i < nums.length; i++) {
//     if (arrLeft[i] === arrRight[i]) return i;
// }
// return -1;