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
 * @param {number} target
 * @return {number}
 */
function findMin(root, target, result) {
    if (root) {
        let difference = Math.abs(root.val - target)
        if (difference < result.min) {
            result.min = difference;
            result.answer = root.val;
        }
        findMin(root.left, target, result);
        findMin(root.right, target, result);
    }
}
var closestValue = function(root, target) {
    let result = {
        min: Infinity,
        answer: null,
        difference: Infinity
    }
    findMin(root, target, result);
    return result.answer;
};