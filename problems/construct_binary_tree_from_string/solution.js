/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */

function formTreeFromParams(s) {
    if (!s)
        return null;
    let i = 0;
    let numStr = ''
    while(i < s.length && (s[i] == '-' || (s[i] >= '0' && s[i] <= '9'))) {
        numStr += s[i];
        i++;
    }
    let num = Number(numStr);
    let node = new TreeNode(num);
    let stack = [node];
    while(i < s.length) {
        // console.log(stack);
        if (s[i] == '(') {
            let numStr = '';
            i++;
            while(s[i] == '-' || (s[i] >= '0' && s[i] <= '9')) {
                numStr += s[i];
                i++;
            }
            i = i - 1;
            let num = Number(numStr);
            let node = new TreeNode(num);
            stack.push(node);
        } else {
            let top = stack.pop();
            if (stack.length == 0)
                return top;
            let prevTop = stack.pop();
            if (prevTop.left) {
                prevTop.right = top;
            } else {
                prevTop.left = top;
            }
            stack.push(prevTop);    
        }
        i++;
    }
    return stack[0];
}


var str2tree = function(s) {
    return formTreeFromParams(s);
};


                