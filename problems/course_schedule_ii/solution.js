/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function initiateGraph(n, map) {
    for (let i = 0; i < n; i++) {
        map[i] = {};
        map[i].indegree = 0;
        map[i].list = [];
    } 
}

function constructGraph(map, relations) {
    for (let i = 0; i < relations.length; i++) {
        let [a, b] = relations[i];
        let nodeA = map[a];
        let nodeB = map[b];
        nodeB.list.push(a);
        nodeA.indegree++;
    }
}

function topSort(n, preReq, map) {
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (map[i].indegree == 0) {
            stack.push(i);
        }
    }
    
    let j = 0;
    let result = [];
    while(j < n) {
        if(stack.length == 0)
            return [];
        let element = stack.pop();
        result.push(element);
        let node = map[element];
        node.list.forEach((nodeEle) => {
            console.log(nodeEle)
           if (--map[nodeEle].indegree == 0) {
               stack.push(nodeEle);
           }
        });
        j++;
    }
    return result;
}

var findOrder = function(numCourses, prerequisites) {
    let map = {};
    initiateGraph(numCourses, map);
    constructGraph(map, prerequisites);
    return topSort(numCourses, prerequisites, map);
};