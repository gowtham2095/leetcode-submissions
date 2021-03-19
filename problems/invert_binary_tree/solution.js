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
 * @return {TreeNode}
 */
function invertBinaryTree(root) {
    if (root) {
        invertBinaryTree(root.left);
        invertBinaryTree(root.right);
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
    }
}

var invertTree = function(root) {
    invertBinaryTree(root);
    return root;
};