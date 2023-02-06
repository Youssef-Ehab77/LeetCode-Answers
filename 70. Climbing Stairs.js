var climbStairs = function (n) {
    let arr = new Array(n + 1);
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};


// /**
//  * https://leetcode.com/problems/climbing-stairs/description/
//  * @param {number} n
//  * @param output
//  * @param history
//  * @return {number}
//  */
// var climbStairs = function (n, output = 0, history = {}) {
//     if (n <= 1) return 1;
//     if (history[n]) return history[n];
//
//     output += climbStairs(n - 1, output, history) + climbStairs(n - 2, output, history);
//     history[n] = output;
//     return output;
// };

console.log(climbStairs(45));
//39 -> 102334155
//34 -> 9227465
//31 -> 2178309