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
 * @return {number[]}
 */

function inOrder(root, result) {
    if (root) {
        inOrder(root.left, result);
        result.push(root.val);
        inOrder(root.right, result);
    }
}

function mergeList(list1, list2) {
    let result = [];
    let p1 = 0;
    let p2 = 0;
    
    while(p1 < list1.length && p2 < list2.length) {
        if (list1[p1] < list2[p2]) {
            result.push(list1[p1]);
            p1++;
        } else {
            result.push(list2[p2]);
            p2++;
        }
    }
    while(p1 < list1.length) {
        result.push(list1[p1]);
        p1++;
    }
    while(p2 < list2.length) {
        result.push(list2[p2]);
        p2++;
    }
    return result;
}

var getAllElements = function(root1, root2) {
    let firstList = [], secondList = [];
    inOrder(root1, firstList);
    inOrder(root2, secondList);
    return mergeList(firstList, secondList);
};



//                 2



//         1               4





//                 1



//         0               3




// function inOrder(root1, root2, result) {
//     if (root1 || root2) {
//         inOrder(root1.left, root2.left)
//         if (root1 == null)
//             result.add(root2);
//         else if (root2 == null)
//             result.add(root1)
//         else {
            
//         }
//     }
// }