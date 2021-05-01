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

// 10 mins

function findSumToPaths(root) {
    let count = 0;
    function preOrder(r, n) {
        if (r) {
           n = n * 10 + r.val;
           if (r.left == null && r.right == null) {
               count += n;
               return;
           }
           preOrder(r.left, n);
           preOrder(r.right, n);
        }
    }
    preOrder(root, 0);
    return count;
}

var sumNumbers = function(root) {
    return findSumToPaths(root);
};







    


// node
// node.left
// node.right


// if node == null



// 1 + 2 + 3