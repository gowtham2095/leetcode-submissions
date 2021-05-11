/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// var leadsToDestination = function(n, edges, source, destination) {
    
// };/**
 // * @param {number} n
 // * @param {number[][]} edges
 // * @param {number} source
 // * @param {number} destination
 // * @return {boolean}
 // */

function buildGraph(edges) {
    let graph = new Map();
    for (let edge of edges) {
        if (graph.get(edge[0]) == undefined) {
            graph.set(edge[0], []);
        }
        graph.get(edge[0]).push(edge[1]);
    }
    return graph;
}

function dfs(graph, source, destination, visited) {
    if (visited.has(source))
        return false;
    if (source == destination)
        return true;
    if (graph.get(source) == undefined)
        return false;
    visited.add(source);
    for (let node of graph.get(source)) {
        if (visited.has(node) || !dfs(graph, node, destination, visited)) {
            return false;
        }
    }
    visited.delete(source);
    return true;
}

var leadsToDestination = function(n, edges, source, destination) {
    let graph = buildGraph(edges);
    // console.log(graph);
    if (graph.get(destination) != undefined)
        return false;
    let visited = new Set();
    return dfs(graph, source, destination, visited);
};



// var leadsToDestination = function(n, edges, source, destination) {
//     let graph = new Map() // adj list
    
//     for (let [edge1,edge2] of edges){
//         if (!graph.has(edge1)){
//             graph.set(edge1, [])
//         }
//         graph.get(edge1).push(edge2)
//     }
//     if (graph.has(destination)) return false // destination should have zero outgoing edges
    
//     let visited = new Set()
    
//     function dfs(node){
//         if (!graph.has(node)){ // at a leaf after starting at source. has to be destination
//             return node === destination
//         }
        
//         for (let neighbor of graph.get(node)) {
//             if (visited.has(neighbor)) return false // cycle detected
//             visited.add(neighbor)
//             if (!dfs(neighbor)) return false
//             visited.delete(neighbor)
//         }
//         return true
//     }
    
//     return dfs(source)
// }