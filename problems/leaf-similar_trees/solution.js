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
 * @return {boolean}
 */
function getLeavesSequence(root, result) {
    if (root) {
        getLeavesSequence(root.left, result);
        if (root.left == null && root.right == null)
            result.push(root.val);
        getLeavesSequence(root.right, result);
    }
    
}

var leafSimilar = function(root1, root2) {
    let result1 = [];
    let result2 = [];
    getLeavesSequence(root1, result1);
    getLeavesSequence(root2, result2);
    
    if (result1.length != result2.length)
        return false;
    
    for(let i = 0; i < result1.length; i++)
        if (result1[i] != result2[i])
            return false;
    return true;
};