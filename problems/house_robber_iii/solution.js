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
var rob = function(root) {
    let map = new Map();
    return doDfsHouse(root, map);
};





// The idea is if the thief chose the parent then the children are omitted

// Else if the thief chose the children parent are omitted

// at each level the subtree of parent and children are elgible for criteria and the root at any given point is memoized

function doDfsHouse(root, map) {
    if (root == null)
        return 0;
    if (map.get(root) != undefined) {
        return map.get(root);
    }
    let children = 0;
    let parent = 0;
    if (root.left) {
        parent = doDfsHouse(root.left.right, map) + doDfsHouse(root.left.left, map);
        children = doDfsHouse(root.left, map);
    }
    if (root.right) {
        parent = parent + doDfsHouse(root.right.right, map) + doDfsHouse(root.right.left, map);
        children += doDfsHouse(root.right, map);
    }
    parent = parent + root.val;
    map.set(root, Math.max(parent, children));
    return map.get(root);
}






//                     3

//             4               5


//     1               3               1



    

// either pick this or skip this





// if I pick this

