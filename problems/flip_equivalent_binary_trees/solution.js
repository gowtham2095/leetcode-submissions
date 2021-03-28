/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function areFlipEquivalent(root1, root2) {
    if (root1 && root2) {
        if (root1.val == root2.val) {
            let lefFlippedOrNormal = (areFlipEquivalent(root1.left, root2.right) || areFlipEquivalent(root1.left, root2.left))
            let rightFlippedOrNormal = (areFlipEquivalent(root1.right, root2.left) || areFlipEquivalent(root1.right, root2.right))
            return true && lefFlippedOrNormal && rightFlippedOrNormal;
        } else {
            return false;
        }
    } else if (root1 == null && root2 == null) {
        return true;
    } else {
        return false;
    }
}

var flipEquiv = function(root1, root2) {
    return areFlipEquivalent(root1, root2);
};