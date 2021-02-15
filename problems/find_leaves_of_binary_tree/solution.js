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
 * @return {number[][]}
 */

function insertIntoResult(root, result) {
    if (root == null)
        return -1;
    let level = 1 + Math.max(insertIntoResult(root.left, result), insertIntoResult(root.right, result));
    if (!result[level]) {
        result[level] = [];
    }
    result[level].push(root.val);
    return level;
}
var findLeaves = function(root) {
    let result = [];
    insertIntoResult(root, result);
    return result;
};