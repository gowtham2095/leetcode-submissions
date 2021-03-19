/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

function traverseTree(root, node, map) {
    if (root) {
        if (root == node) {
            return true;
        } else {
            let leftTraversal = map.get(root.left) === false ? false : traverseTree(root.left, node, map);
            let rightTraversal = map.get(root.right) === false ? false : traverseTree(root.right, node, map)
            let val = leftTraversal || rightTraversal
            if (!val) {
                map.set(root, false);
                return false;
            }
            return true;
        }
    }
    return false;
}

function findLowestCommonAncestor(p, q) {
    let map = new Map();
    if (traverseTree(p.left, q, map) || traverseTree(p.right, q, map)) {
        return p;
    } else if (traverseTree(q.left, p, map) || traverseTree(q.right, p, map)) {
        return q;
    } else {
        let root = p.parent;
        while(root != null) {
            let val = traverseTree(root, q, map);
            if (val) {
                break;
            }
            root = root.parent;
        }
        
        if (root != null) {
            return root;
        }
    }
}

var lowestCommonAncestor = function(p, q) {
    return findLowestCommonAncestor(p, q);
};






