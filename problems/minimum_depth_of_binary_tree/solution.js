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
function minDepthFind(root) {
    if (root.left == null && root.right == null)
        return 0;
    else {
        let leftMin = root.left ? minDepthFind(root.left) + 1 : Infinity;
        let rightMin = root.right ? minDepthFind(root.right) + 1 : Infinity
        return Math.min(leftMin, rightMin);
    }
}

var minDepth = function(root) {
    if (root == null)
        return 0;
    // if (root.left == null)
    //     return 1 + minDepthFind(root.right);
    // else if (root.right == null)
    //     return 1 + minDepthFind(root.left);
    // else
        return 1 + minDepthFind(root);
};


// Only if both children are empty return 0



//                 2

//                         3
                    

//                                 4

//                                         5

//                                                 6