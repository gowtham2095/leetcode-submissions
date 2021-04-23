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
 */

function addToStack(ptr, stack) {
    while(ptr) {
        stack.push(ptr);
        ptr = ptr.left;
    }
}

var BSTIterator = function(root) {
    this.root = root;
    this.iteratorStack = [];
    addToStack(this.root, this.iteratorStack);
};
/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this.hasNext()) {
        let ele = this.iteratorStack.pop();
        if (ele.right) {
            addToStack(ele.right, this.iteratorStack);
        }
        return ele.val;
    }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.iteratorStack.length != 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */



// stack 

//        7, 3, 15, null, null, 9, 20




// 7 -> 3


//                 7


//         3               15


//                     9       20