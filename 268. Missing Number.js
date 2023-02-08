/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0;
    let l = nums.length;
    nums.push(0);
    for (let i = 0; i <= l; i++) {
        sum += i - nums[i];
    }
    return sum;
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([2, 0]));
console.log(missingNumber([3,0,1]));

