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
function treeHeight(root) {
    if (!root) {
        return 0;
    } else {
        return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
    }
}
var maxDepth = function(root) {
    return treeHeight(root);
};