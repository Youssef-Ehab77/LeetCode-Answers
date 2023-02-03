/**https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/description/
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
    let parentMap = {};
    let labelMap = {};
    let result = new Array(n).fill(1);

    //create parentMap
    for (let edge of edges) {
        if (parentMap[edge[1]]) {
            parentMap[edge[0]] = edge[1];
        } else {
            parentMap[edge[1]] = edge[0];
        }
    }
    //create labelMap
    for (let label in labels) {
        labelMap[label] = labels[label];
    }

    for (let i = edges.length - 1; i >= 0; i--) {
        let currentNode = edges[i][1];
        let currentLabel = labelMap[currentNode];
        for (let j = i+1; j <= edges.length; j++) {
            if (parentMap[j] === currentNode && labelMap[j] === currentLabel) {
                result[i+1] += result[j];
                console.log(i+1 + ". " + j);

            }
        }
        // console.log(result)
    }

    for (let i = 0; i < n; i++) {
        if (parentMap[i] === 0 && labelMap[i] === labels[0])
            result[0] += result[i];
    }
    console.log(parentMap);
    return result;
};
//[6,5,4,1,3,2,1]
//[3,2,1,1,2,2,1]
console.log(countSubTrees(7, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]], "aaabaaa"));
// console.log(countSubTrees(7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], "abaedcd"));

///**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @param {string} labels
//  * @return {number[]}
//  */
// var countSubTrees = function(n, edges, labels) {
//     // Create an adjacency list to represent the tree
//     let adjList = new Array(n).fill(null).map(() => []);
//     for (let [a, b] of edges) {
//         adjList[a].push(b);
//         adjList[b].push(a);
//     }
//
//     // Create an array to store the result
//     let res = new Array(n).fill(0);
//
//     // Run a depth-first search to traverse the tree and count the subtrees
//     function dfs(node, parent) {
//         let count = new Array(26).fill(0); // count of each letter in the subtree
//         count[labels.charCodeAt(node) - 'a'.charCodeAt(0)]++; // count the current node
//         for (let next of adjList[node]) {
//             if (next !== parent) {
//                 let nextCount = dfs(next, node);
//                 for (let i = 0; i < 26; i++) {
//                     count[i] += nextCount[i];
//                 }
//             }
//         }
//         res[node] = count[labels.charCodeAt(node) - 'a'.charCodeAt(0)]; // store the result for current node
//         return count;
//     }
//
//     dfs(0, -1);
//     return res;