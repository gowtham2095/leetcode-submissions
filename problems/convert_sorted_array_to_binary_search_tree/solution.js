/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function formBst(nums, left, right) {
    if (left > right)
        return null;
    let middle = left + Math.floor((right - left)/2);
    let root = new TreeNode(nums[middle]);
    root.left = formBst(nums, left, middle - 1);
    root.right = formBst(nums, middle + 1, right);
    return root;
}
var sortedArrayToBST = function(nums) {
    return formBst(nums, 0, nums.length - 1);
};




// [-10,-3,0,5,9]
    // 0   1  2 3 4


// node = middle

// left = middle - 1

// right = middle + 1


//                 0

//             -3      

