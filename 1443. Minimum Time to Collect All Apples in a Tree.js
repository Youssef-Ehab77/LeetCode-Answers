/// This is a binary tree, without the binary and without the tree
/// so it's a graph 100%
/** https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description/
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
    let map = {};
    let output = 0;
    edges.sort(function (a, b) {
        return a[0] - b[0];
    });
    for (let edge of edges) {
        if (map[edge[1]] !== undefined)
            map[edge[0]] = edge[1];
        else {
            map[edge[1]] = edge[0];
        }
    }

    for (let i = 0; i < hasApple.length; ++i) {
        if (!hasApple[i]) continue;
        let p = i;
        while (p !== 0 && map[p] >= 0) {
            let temp = map[p];
            map[p] = -1;
            p = temp;
            output += 2;
        }
    }
    return output;
};
console.log(minTime(4, [[0, 1], [1, 2], [0, 3]], [true, true, true, true]));