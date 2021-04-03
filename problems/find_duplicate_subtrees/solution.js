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
 * @return {TreeNode[]}
 */

function dfsTree(root, set, result, finalSet) {
    if (root) {
        let leftString = 'l' + (dfsTree(root.left, set, result, finalSet) || '');
        let rightString = 'r' + (dfsTree(root.right, set, result, finalSet) || '');
        let rootString = leftString + '#' + root.val + '*' + rightString;
        if (set.has(rootString) && !finalSet.has(rootString)) {
            result.push(root);
            finalSet.add(rootString);
        } else {
            set.add(rootString);
        }
        return rootString;
    }
}

function duplicateSubtrees(root) {
    let result = [];
    let set = new Set();
    let finalSet = new Set();
    dfsTree(root, set, result, finalSet);
    return result;
}

var findDuplicateSubtrees = function(root) {
    return duplicateSubtrees(root);
};




