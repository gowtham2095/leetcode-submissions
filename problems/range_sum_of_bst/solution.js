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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

function dfs(root, low, high, result) {
    if (root) {
        dfs(root.left, low, high, result)
        if (root.val >= low && root.val <= high) {
            result.sum += root.val
        }
        dfs(root.right, low, high, result);
    }
}

var rangeSumBST = function(root, low, high) {
    let result = {
        sum: 0
    }
    dfs(root, low, high, result);
    return result.sum;
};