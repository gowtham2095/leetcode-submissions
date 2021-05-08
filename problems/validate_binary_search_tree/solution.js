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
 * @return {boolean}
 */

function isValid(root, lowValue, highValue) {
    if (root == null) {
        return true;
    }
    return lowValue < root.val && highValue > root.val && isValid(root.left, lowValue, root.val) && isValid(root.right, root.val, highValue);
}

var isValidBST = function(root) {
    return isValid(root, -Infinity, Infinity);
};
