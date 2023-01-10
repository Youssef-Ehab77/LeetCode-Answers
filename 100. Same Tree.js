//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * https://leetcode.com/problems/same-tree/
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @param flag
 * @return {boolean}
 */
var isSameTree = function (p, q, flag = true) {
    if (p == null && q == null) { //if both are null this means they are still equal
        return true;
    } else if (p == null) { // if only p or q is null this means they are not equal
        return false;
    } else if (q == null) {
        return false;
    }

    flag = (p.val === q.val); //if values of the nodes are equal then ture
    if (flag) {//check left first (I'm searching in preorder/ node --> left --> right )
        flag = isSameTree(p.left, q.left, flag);
    }
    //we have to check again because the flag may have changed after going left
    if (flag) {
        flag = isSameTree(p.right, q.right, flag);
    }
    return flag;
};
// 1
//   \
//     2
//    /
//   3
let p = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));
let q = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));
console.log(isSameTree(p, q));

//******************************** Crazy Solution 😂😂 ********************************//
// var isSameTree = function(p, q) {
//     return JSON.stringify(p)===JSON.stringify(q);
// };


//******************************** Same Logic Fewer Lines ********************************//
// function isSameTree(p, q) {
//     if (!p && !q) return true;
//     if (!p || !q || p.val !== q.val) return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }