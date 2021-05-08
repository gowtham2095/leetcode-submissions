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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
function isPossible(root, n, val) {
    let left = null;
    let right = null;
    findCount(root);
    return Math.max(left, right, n - left - right - 1) > Math.floor(n/2);
    function findCount(root) {
        if (root == null)
            return 0;
        let l = findCount(root.left);
        let r = findCount(root.right);
        if (root.val == val) {
            left = l;
            right = r;
        }
        return l + r + 1;
    }
    
}


var btreeGameWinningMove = function(root, n, x) {
    return isPossible(root, n, x);
};



// n is number of nodes
// n is odd


// node has 1 to n




//                             1

//                     2               3

//                 4       5       6       7

//             8     9   10  11


