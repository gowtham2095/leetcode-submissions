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
 * @return {TreeNode}
 */

function mergeDfs(root1, root2, root3) {
    if (root1 || root2) {
        let sumVal = (root1 && root1.val || 0) + (root2 && root2.val || 0);
        root3 = new TreeNode(sumVal);
        root3.left = mergeDfs(root1 && root1.left, root2 && root2.left, root3.left);
        root3.right = mergeDfs(root1 && root1.right, root2 && root2.right, root3.right);
    }
    return root3;
}

var mergeTrees = function(root1, root2) {
    return mergeDfs(root1, root2, null);
};