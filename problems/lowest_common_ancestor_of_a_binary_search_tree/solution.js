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
function findCommonAncestor(root, p, q) {
   if (root) {
       if ((root.val >= p.val && root.val <= q.val) || (root.val >= q.val && root.val <= p.val)) {
           return root;
       } else if (root.val < p.val && root.val < q.val) {
           return findCommonAncestor(root.right, p, q);
       } else {
           return findCommonAncestor(root.left, p, q);
       }
   } 
}

var lowestCommonAncestor = function(root, p, q) {
    return findCommonAncestor(root, p, q);
};