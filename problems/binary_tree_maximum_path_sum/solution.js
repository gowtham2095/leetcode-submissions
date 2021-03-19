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

// there are two catches in this problem. If the path value needs to be considered we skip the negative part by doing Math.max against zero (i.e) let leftSum = Math.max(traverseTree(root.left, result), 0);


// When we return we do Math.max(left subtree and right subtree). Coz to be considered as a path for upper level root there can only be one subtree through which the path emerges.

function traverseTree(root, result = {}) {
    if (root) {
        let leftSum = Math.max(traverseTree(root.left, result), 0);
        let rightSum = Math.max(traverseTree(root.right, result), 0);
        let totalSum = leftSum + rightSum + root.val;
        result.max = Math.max(result.max, totalSum);
        return root.val + Math.max(leftSum, rightSum);
    } else {
        return 0;
    }
}

var maxPathSum = function(root) {
    let result = {
        max: -Infinity
    };
    
    traverseTree(root, result);
    return result.max;
};



