/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function traverseTree(root, result = {}) {
    if (root) {
        let leftSum = Math.max(traverseTree(root.left, result), 0);
        let rightSum = Math.max(traverseTree(root.right, result), 0);
        let totalSum = leftSum + rightSum + root.val;
        result.max = Math.max(result.max, totalSum);
        return root.val + Math.max(leftSum, rightSum);
    } else {
        return 0;
    }
}

var maxPathSum = function(root) {
    let result = {
        max: -Infinity
    };
    
    traverseTree(root, result);
    return result.max;
};