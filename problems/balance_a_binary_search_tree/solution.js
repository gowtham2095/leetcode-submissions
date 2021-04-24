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


// Soled it in 20 mins
function formList(root, result) {
    if (root) {
        formList(root.left, result);
        result.push(root.val);
        formList(root.right, result);
    }
}

function binarySearch(left, right, list) {
    let middle = Math.floor((left + right) / 2);
    let root = null;
    if (left > right)
        return null;
    else {
        root = new TreeNode(list[middle]);
        root.left = binarySearch(left, middle - 1, list);
        root.right = binarySearch(middle + 1, right, list);
    }
    return root;
}

function balancedTree(list) {
    let left = 0;
    let right = list.length - 1;
    let root = binarySearch(left, right, list);
    return root;
}



var balanceBST = function(root) {
    let list = [];
    formList(root, list);
    return balancedTree(list);
};








// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9




// 1, 2, 3, 4, 5, 6, 7, 8, 9

// l                       r