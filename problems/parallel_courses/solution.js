/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
function constructGraph(n , relations, graph) {
    for (let i = 1; i <= n; i++) {
        graph[i] = {}
        graph[i].list = [];
        graph[i].indegree = 0;
    }
}

function formRelations (relations, graph) {
    for (let i =0; i < relations.length; i++) {
        let [a, b] = relations[i];
        let nodeA = graph[a];
        let nodeB = graph[b];
        nodeA.list.push(b);
        nodeB.indegree++;
    }
}


var minimumSemesters = function(n, relations) {
    let graph = {};
    constructGraph(n, relations, graph);
    formRelations(relations, graph);
    let stack = [];
    for (let i = 1; i <= n; i++) {
        if (graph[i].indegree == 0) {
            stack.push(i);
        }
    }
    let semester = 0;
    while(stack.length != 0) {
        let tempStack = [];
        while(stack.length != 0) {
            let ele = stack.pop();
            let node = graph[ele];
            n--;
            node.list.forEach((nodeVal) => {
                let vertex = graph[nodeVal];
                if (--vertex.indegree == 0) {
                    tempStack.push(nodeVal);
                }
            });
        }
        semester++;
        stack = tempStack;
    }
    
    return n == 0 ? semester : -1;
};






// Topological sort



// 1) Form an adjacency list and also form indegree of nodes
// 2) Push all nodes of indegree zero to the stack
// 3) Loop while stack is empty
// 4) Take all elements from stack and push all adjacency elements to the stack and reduce indegree of it to zero
// 5) increment semester after for every while
    
    



// 1, 3
// 2, 3






// stack 1, 

// 1 -> 3
    
// 2 -> 3




// 4 -> 5

// 4 -> 3







// 4, 
// map(3) is seen


