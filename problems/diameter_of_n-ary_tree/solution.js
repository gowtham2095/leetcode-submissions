/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
function findFirstTwoMax(arr) {
    let max1 = -Infinity, max2 = -Infinity;
    if (arr.length === 0) {
        return [0];
    }
    if (arr.length === 1) {
        return [arr[0]];
    }
    arr.sort((a, b) => b - a);
    return [arr[0], arr[1]];
}

function computeDiameter(root, result) {
        if (root) {
            let childrenHeight = [];
            root.children.forEach((child) => {
                childrenHeight.push( 1 + computeDiameter(child, result));
            });
            let maxTwo = findFirstTwoMax(childrenHeight);
            let sum = 0;
            sum = maxTwo[0];
            if (maxTwo.length == 2) {
                sum += maxTwo[1];
            }
            result.push(sum);
            return maxTwo[0];
        } else {
            return -1;
        }
}

var diameter = function(root) {
    let result = [];
    computeDiameter(root, result);
    console.log(result)
    result.sort((a, b) => b - a);
    if (result.length) {
        return result[0];
    } else {
        return 0;
    }
};