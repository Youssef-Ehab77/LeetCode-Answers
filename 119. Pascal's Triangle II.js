/**
 * @param {number} rowIndex
 * @return {number[][]}
 */
// var getRow = function (rowIndex) {
//     rowIndex+=1;
//     if (rowIndex === 0) return [];
//     let matrix = new Array(rowIndex);
//
//     for (let i = 0; i < rowIndex; i++)
//         matrix[i] = new Array(i + 1);
//
//     matrix[0][0] = 1;
//
//     for (let i = 1; i < rowIndex; i++) {
//         for (let j = 0; j <= i; j++) {
//             matrix[i][j] =
//                 ((matrix[i - 1][j] === undefined) ? 0 : matrix[i - 1][j]) +
//                 ((matrix[i - 1][j - 1] === undefined) ? 0 : matrix[i - 1][j - 1]);
//         }
//     }
//
//     return matrix[rowIndex-1];
// };

https://leetcode.com/problems/pascals-triangle-ii/solutions/1203260/very-easy-o-n-time-0-ms-beats-100-simple-maths-all-languages/?orderBy=most_votes&languageTags=javascript
var getRow = function (rowIndex) {
    let ans = new Array(rowIndex + 1)
    ans[0] = ans[rowIndex] = 1
    for (let i = 1, up = rowIndex; i <= Math.ceil(rowIndex/2); i++, up--)
        ans[i] = ans[rowIndex-i] = ans[i - 1] * up / i;
    return ans;
};

console.log(getRow(10));

