/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)
//var thirdMax = function(nums) {
//     if(nums.length<3) return Math.max(...nums);
//     let u = new Set(nums)
//     if(u.size<3) return Math.max(...u);
//
//     for(let i=0;i<2;i++){
//         u.delete(Math.max(...u))
//     }
//
//     return Math.max(...u);
// };

// O( n log(n))
var thirdMax = function (nums) {
    let uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a, b) => a - b);
    return uniqueNums.length < 3 ? uniqueNums[uniqueNums.length - 1] : uniqueNums[uniqueNums.length - 3];
};

console.log(thirdMax([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6]));
