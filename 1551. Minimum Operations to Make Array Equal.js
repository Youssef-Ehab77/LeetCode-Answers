//this for loop will fill the array with n numbers of
//elements and the equation generates odd numbers only
//[1,3,5,7,9,11,13,15]
//if n is an odd number
//take the middle element and add the different between this element and every element before it
/**
 * https://leetcode.com/problems/minimum-operations-to-make-array-equal/
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
    let nums = []
    let output = 0;
    //this for loop will fill the array with n numbers of
    //elements and the equation generates odd numbers only
    //[1,3,5,7,9,11,13,15]
    for (let i = 0; i < n; i++)
        nums[i] = (2 * i) + 1;
    //if n is an odd number
    //take the middle element and add the different between this element and every element before it

    if (n % 2 !== 0) {
        let middleIndex = Math.floor(n / 2)
        let middle = nums[middleIndex];

        for (let i = 0; i < middleIndex; i++)
            output += middle - nums[i];
    } else {
        let middleIndex = n / 2;
        let middle = nums[middleIndex];
        output += 1;
        for (let i = 0; i < middleIndex - 1; i++)
            output += middle - 1 - nums[i];
    }

    return output;
}


console.log(minOperations(6));

// O(1)
// var minOperations = function (n) {
//     return (n*n)/4;
// }
