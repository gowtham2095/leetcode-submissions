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
 * @param {number} target
 * @return {boolean}
 */

function inOrderTraversal(root, result, target) {
    if (root) {
        inOrderTraversal(root.left, result, target);
        result[root.val] = target - root.val;
        inOrderTraversal(root.right, result, target);
    }
}

function isTargetPresent(root1, root2, target) {
    let firstMap = {};
    let secondMap = {};
    inOrderTraversal(root1, firstMap, target);
    inOrderTraversal(root2, secondMap, target);
    let firstMapEntries = Object.keys(firstMap).map((key) => {
        return {
            'key': key,
            'value': firstMap[key]
        }
    });
    for (let i = 0; i < firstMapEntries.length; i++) {
        let val = firstMapEntries[i].value;
        if (secondMap[val]) {
            return true;
        }
    }
    return false;
}

var twoSumBSTs = function(root1, root2, target) {
    return isTargetPresent(root1, root2, target);
};