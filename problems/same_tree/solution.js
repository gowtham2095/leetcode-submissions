/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function checkIfSameTree(p, q) {
    if (p && q) {
        return checkIfSameTree(p.left, q.left) && checkIfSameTree(p.right, q.right) && p.val === q.val;
    } else if (p == null && q == null) {
        return true;
    } else {
        return false;
    }
}

var isSameTree = function(p, q) {
    return checkIfSameTree(p, q);
};
