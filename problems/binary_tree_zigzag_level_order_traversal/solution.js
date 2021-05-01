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
 * @return {number[][]}
 */


function traverse(root) {
    if(!root) {
        return [];
    }
    let result = []
    let stack = [];
    stack.push(root);
    let isEven = false
    while(stack.length) {
            let res = [];
            let len = stack.length;
            while(len) {
                let ele;
                ele = stack.shift()
                res.push(ele.val);
                if (ele.left) {
                    stack.push(ele.left);
                }
                
                if (ele.right) {
                    stack.push(ele.right);
                }
                
                // if (ele.left && isEven) {
                //     stack.push(ele.left)
                // }
                len--;
            }
            if (isEven) 
                res.reverse();
            result.push(res);
            isEven = !isEven;
        }
    
        return result; 
    }
    

    

var zigzagLevelOrder = function(root) {
    return traverse(root);
};