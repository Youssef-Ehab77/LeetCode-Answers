/**
 * https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let arrLeft = [];
    let arrRight = [];
    arrLeft[0] = nums[0];
    arrRight[nums.length - 1] = nums[nums.length - 1];

    for (let i = 1; i < nums.length; i++) {
        arrLeft[i] = nums[i] + arrLeft[i - 1];
        arrRight[nums.length - 1 - i] = nums[nums.length - i - 1] + arrRight[nums.length - i];
    }

    console.log(arrRight);
    console.log(arrLeft);
    for (let i = 0; i < nums.length; i++) {
        if (arrLeft[i] === arrRight[i]) return i;
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([2, 1, -1]))

//needs some more work
// let sum = 0;
// nums.forEach(num => sum += num);
// let sumLeft = sum;
// let sumRight = 0;
// for (let i in nums) {
//     sumLeft -= nums[i]
//     sumRight += nums[nums.length - 1 - i];
//     if (sumLeft === sumRight)
//         return i;
//
// }
// return -1;