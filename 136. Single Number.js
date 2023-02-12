/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    const l = nums.length;
    for (let i = 0; i < l; i++) {
        result ^= nums[i];
    }
    return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));