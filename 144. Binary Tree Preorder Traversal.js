/**
 * Definition for a binary tree node.
 */
/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var preorderTraversal = function (root) {
    //will fill the stack with tree nodes to visit its right side later
    let stk = [];
    let output = [];

    while (root != null || stk.length > 0) {
        output.push(root.val); //add the value of each node to the output array
        //push the right first then the left node if it's not null, because we want
        // to visit stack top (left nodes) first
        (root.right != null) ? stk.push(root.right) : null;
        (root.left != null) ? stk.push(root.left) : null;
        root = stk.pop(); // root is equal to the stack top and then remove it from stack
    }
    return output;
};
let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));
console.log(preorderTraversal(root));


//************** Trivial Recursive Solution **********************//
//var preorderTraversal = function (root, arr = []) {
//     if (root == null)
//         return [];
//
//     arr.push(root.val);
//     preorderTraversal(root.left, arr);
//     preorderTraversal(root.right, arr);
//     return arr;
// };