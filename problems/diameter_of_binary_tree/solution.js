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

function findDiameter(root) {
    let max = -Infinity;
    function computeLongestPath(rootNode) {
        if (rootNode) {
            let leftVal = 1 + computeLongestPath(rootNode.left);
            let rightVal = 1 + computeLongestPath(rootNode.right);
            let subTreeVal = leftVal + rightVal;
            max = Math.max(max, subTreeVal);
            return Math.max(leftVal, rightVal);
        } else {
            return -1;
        }
    }
    computeLongestPath(root);
    return max;
}

var diameterOfBinaryTree = function(root) {
    return findDiameter(root);
};






//             1

//         2        3


//     4       5