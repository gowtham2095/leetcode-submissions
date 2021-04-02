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