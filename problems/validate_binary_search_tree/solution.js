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
    if ((lowValue != null && lowValue.val >= root.val) || (highValue != null && highValue.val <= root.val)) {
       return false; 
    }
    return isValid(root.left, lowValue, root) && isValid(root.right, root, highValue);
}

var isValidBST = function(root) {
    return isValid(root, null, null);
};
