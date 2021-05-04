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
 * @return {TreeNode}
 */



function removeZeroTrees(root) {
    if (root) {
        root.left = removeZeroTrees(root.left);
        root.right = removeZeroTrees(root.right);
        if (root.val == 0 && root.left == null && root.right == null) {
            root = null;
        }
        return root;
    } else {
        return null;
    }
}

var pruneTree = function(root) {
    
    removeZeroTrees(root);
    if (root.val == 0 && root.left == null && root.right == null) {
            root = null;
    }
    return root;
};



//             0

//     null            0
                


//                         1

//                 null                1

        
//             null       null       null       1









//                             1

//                 1                   0
                            
//           1          1              0       1

//     null