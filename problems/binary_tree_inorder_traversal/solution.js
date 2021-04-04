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
 * @return {number[]}
 */
function inorderDfs(root, result) {
    if (root) {
        inorderDfs(root.left, result);
        result.push(root.val);
        inorderDfs(root.right, result);
    }
}

var inorderTraversal = function(root) {
    let result = [];
    inorderDfs(root, result);
    return result;
};