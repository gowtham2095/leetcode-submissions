/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */


function constructGraphDfs(node, markedNodes) {
   if (node) {
       if (markedNodes.get(node.val) != undefined) {
           return markedNodes.get(node.val);
       }
       let ele = new Node(node.val);
       markedNodes.set(node.val, ele);
       let adjacencyList = node.neighbors;
       adjacencyList.forEach((element) => {
          ele.neighbors.push(constructGraphDfs(element, markedNodes));
       });
       return ele;
   } 
}

var cloneGraph = function(node) {
    let map = new Map();
    return constructGraphDfs(node, map);
};