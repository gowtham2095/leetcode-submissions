/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function dfs(graph, source, target, visited) {
    if (source == target) {
        return 1;
    }
    let neighbours = graph[source];
    for (let i = 0; i < neighbours.length; i++) {
        let val;
        if (!visited.has(neighbours[i].vertex)) {
            visited.add(neighbours[i].vertex);
            val = neighbours[i].value * dfs(graph, neighbours[i].vertex, target, visited);
        }
        if (val > 0)
            return val;
    }
    return -1.0;
}

function performDfs(graph, source, target) {
    let visited = new Set();

    if (graph[source] == undefined || graph[target] == undefined)
        return -1.0;
    else if (source == target)
        return 1.0;
    else {
        visited.add(source);
        return dfs(graph, source, target, visited);
    }
}

function constructGraph(equations, values) {
    let graph = {};
    for (let i = 0; i < equations.length; i++) {
        let A = equations[i][0];
        let B = equations[i][1];
        
        if (graph[A] == undefined) {
            graph[A] = [];
        }
        graph[A].push({vertex: B, value: values[i]});
        
        if (graph[B] == undefined) {
            graph[B] = [];
        }
        graph[B].push({vertex: A, value: 1/values[i]});
    }
    return graph;
}

var calcEquation = function(equations, values, queries) {
    let graph = constructGraph(equations, values);
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let source = queries[i][0];
        let target = queries[i][1];
        result.push(performDfs(graph, source, target));
    }
    return result;
};