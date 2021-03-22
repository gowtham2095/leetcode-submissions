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
function findNode(root, node, result = {}) {
    if (root) {
        findNode(root.left, node, result);
        if (node == root) {
            result.node = root;
        }
        findNode(root.right, node, result);
    }
}

function traverse(p, map) {
    if (p.parent != null) {
        map.set(p.parent, true);
        traverse(p.parent, map);
    }
}

function returnCommonParent(q, map) {
    if (q) { 
        if (map.get(q.parent)) {
            return q.parent;
        }
        return returnCommonParent(q.parent, map);
    }
}

function lowestAncestor(p, q) {
    let result = {}
    findNode(p, q, result);
    if (result.node) {
        return p;
    }
    result = {};
    findNode(q, p, result);
    if (result.node) {
        return q;
    }
    let map = new Map();
    traverse(p, map);
    return returnCommonParent(q, map);
}

var lowestCommonAncestor = function(p, q) {
    return lowestAncestor(p, q);
};
    
    

    
