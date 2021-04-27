/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function buildTreeFromList(pre, inorder) {
    if (inorder.length == 0)
        return null;
    let ele = pre.shift();
    let root = new TreeNode(ele);
    for (var i = 0; i < inorder.length; i++) {
        if (inorder[i] == ele)
            break;
    }
    root.left = buildTreeFromList(pre, inorder.slice(0, i ));
    root.right = buildTreeFromList(pre, inorder.slice(i + 1, inorder.length));
    return root;
}
var buildTree = function(preorder, inorder) {
   if (preorder.length == 0)
       return null;
    return buildTreeFromList(preorder, inorder)
};


// [20,15,7]


// [15,20,7]


//     3
// 9






//                 1

        

//         2               3


//     4       5                   7


//           6             8




//  preorder -   5, 6, 3, 7, 8

// inorder    [4, 2, 6, 5] 1, [8, 7, 3]
            


// stack - 4, 2, 6, 5



                // 1 - root

            
        




