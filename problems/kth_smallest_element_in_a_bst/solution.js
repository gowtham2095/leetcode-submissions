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
 * @param {number} k
 * @return {number}
 */
function findKthSmallest(root, k) {
   let stack = [];
   let node = root;
   let list = [];
   while (node || stack.length != 0) {
       while(node) {
           stack.push(node);
           node = node.left;
       }
       let ele = stack.pop();
       list.push(ele.val);
       k--;
       if (k == 0)
           return ele.val;

       node = ele.right;
   }
}

var kthSmallest = function(root, k) {
    return findKthSmallest(root, k);
};