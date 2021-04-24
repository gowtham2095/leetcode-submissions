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
function formTree(root) {
    let sum = 0;
    function bstToGstDfs(root) {
        if (root) {
            bstToGstDfs(root.right);
            root.val = sum + root.val;
            sum = root.val;
            bstToGstDfs(root.left);
        }
    }
    bstToGstDfs(root);
    return root;
}

var bstToGst = function(root) {
    formTree(root);
    return root;
};


