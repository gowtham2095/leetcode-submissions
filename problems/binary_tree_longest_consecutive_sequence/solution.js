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
function dfsTraverse(root, number, count, result) {
    if (root) {
        let diff = root.val - number;
        if (diff == 1) {
            count++;
        } else {
            count = 1;
        }
        result.max = Math.max(result.max, count);
        dfsTraverse(root.left, root.val, count, result);
        dfsTraverse(root.right, root.val, count, result);
    } else {
        result.max = Math.max(result.max, count);
    }
}

var longestConsecutive = function(root) {
    let result = {
        max: 1
    };
    dfsTraverse(root, Infinity, 1, result);
    return result.max;
};
