/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


function findLowestCommonAncestor(root, p, q, result) {
    if (root) {
        let left = findLowestCommonAncestor(root.left, p, q, result);
        let right = findLowestCommonAncestor(root.right, p, q, result);
        if (result.isFound)
            return;
        if (left && right || left && (root == p || root == q) || right && (root == p || root == q)) {
            root.isFound = true;
            result.val = root;
            return;
        }
        if (root == p || root == q)
            return true;
        else {
            return left || right;
        }
    } else {
        return false
    }
}

var lowestCommonAncestor = function(root, p, q) {
    let result = {
        isFound: false,
        val: null
    }
    findLowestCommonAncestor(root, p, q, result);
    return result.val;
};