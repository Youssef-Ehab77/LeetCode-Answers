/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null;

    let maxIndex = nums.indexOf(Math.max(...nums));
    let tree = new TreeNode(nums[maxIndex]);
    tree.left = constructMaximumBinaryTree(nums.slice(0, (maxIndex <= 0 ? 0 : maxIndex)));
    tree.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length));
    return tree;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
