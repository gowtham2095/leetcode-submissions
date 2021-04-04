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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

 
function dfs(root, deleteSet, result, parent, direction) {
    if (root) {
        dfs(root.left, deleteSet, result, root, 'left');
        dfs(root.right, deleteSet, result, root, 'right');
        if (deleteSet.has(root.val)) {
            if (root.left) {
                result.push(root.left);
            }
            if (root.right) {
                result.push(root.right)
            }
            if (parent && direction == 'left') {
                parent.left = null;
            }
            if (parent && direction == 'right') {
                parent.right = null;
            }
        }
    }
}

function forestList(root, to_delete) {
    let set = new Set()
    for(let i = 0; i < to_delete.length; i++) {
        set.add(to_delete[i]);
    }
    let result = [];
    dfs(root, set, result, null);
    if (!set.has(root.val))
        result.push(root);
    return result;
}



var delNodes = function(root, to_delete) {
    return forestList(root, to_delete);
};






//                 1

//         2               3 


//     4       5        6      7
                                    
                            // 98        8







