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




//                         1
        
//             2                       3


//         4       5               6       7

//     78      31

// 3, 4, 2
function deleteTheNodes(root, result, deleteSet) {
    if (root) {
        root.left = deleteTheNodes(root.left, result, deleteSet);
        root.right = deleteTheNodes(root.right, result, deleteSet);
        if (deleteSet.has(root.val)) {
            if (root.left) {
                // if (!deleteSet.has(root.left)) {
                result.push(root.left);
                // }
            }
            if (root.right) {
                // if (!deleteSet.has(root.right)) {
                result.push(root.right);
                // }
            }
            return null;
        } else {
            return root;
        }


    } else {
        return null;
    }
}


var delNodes = function(root, to_delete) {
    let toDeleteNodes = new Set(to_delete);
    let result = [];
    deleteTheNodes(root, result, toDeleteNodes);
    if (!toDeleteNodes.has(root.val)) {
        result.push(root);
    }
    return result;
};


//             1
//         2       4

//     null  3


[1,2,3,null,null,null,4]
[2,1]


        




// 78, 31


// if the node to be deleted is found 

// then add the left and right subtrees if present

// while up in the root if left or right is the root to be deleted then make it as null and move up

// result 

// [4, 


