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
function countCompleteTree(root) {
    let count = 0;
    let notFoundCount = true;
    let flag = false;
    let depth = 1;
    function findLevel(node, n) {
        if (node && notFoundCount) {
            if (!notFoundCount) {
                return;
            }
            if (node && flag && depth == n) {
                notFoundCount = false;
            }
            findLevel(node.right, n + 1);
            findLevel(node.left, n + 1);
        } else {
            if (flag == false) {
                depth = n;
                count = (2 ** depth) - 2;
                flag = true;
            } else if (notFoundCount) {
                if (count == ((2 ** (depth  - 1)) - 1)) {
                   notFoundCount = false; 
                }
                count--;
            }
        }
    }

    findLevel(root, 1);
    return count;
}
var countNodes = function(root) {
    return countCompleteTree(root);
};

// Number of Nodes = (2 ^ k) -1 
// k = 3

//      7 nodes + 9 has left child then - 1
                

// 9 - no right child


//                 1

//         2               3

//     4       4        6        9

// 8.     7 6.    5. 3.    





//                 1

//         2               3

//     4       4        6        9

// 8.     7 6.    5. 3.    7.   10   1


// function findLevel(node) {
//     if (node && notFoundCount) {
//         if (node && flag && depth == n) {
//             notFoundCount = false;
//         }
//         findLevel(node.right);
//         findLevel(node.left);
//     } else {
//         if (flag == false) {
//             depth = n;
//             count = (depth ^ k) - 2
//             flag = true;
//         } else if (notFoundCount) {
//             count--;
//             if (count == ((depth ^ k -1) - 1)) {
//                notFoundCount = false; 
//             }
//         }
//     }
// }


// 2 ^ 4 = 15

// 15;--


// if node
// right - one level fully present
// left - 