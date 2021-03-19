/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function constructPath(prerequisites, map, number, stack) {
    for (let i = 0; i < number; i++) {
        map[i] = {};
        map[i].indegree = 0;
        map[i].edgeNodes = [];
    } 
    prerequisites.forEach((path) => {
        let [start, end] = path;
        map[end].indegree++;
        map[start].edgeNodes.push(end);
    });
    for (let i = 0; i < number; i++) {
        if (map[i].indegree === 0) {
            stack.push(i);
        }
    }
}

function isTopSort(prerequisites, map, numCourses, stack) {
    let start;
    let sortOrder = {};
    let adjacentElements;
    for (let i = 0; i < numCourses; i++) {
        if (stack.length === 0) {
            return false;
        }
        start = stack.pop();
        sortOrder[start] = i;
        adjacentElements = map[start].edgeNodes;
        for (let j = 0; j < adjacentElements.length; j++) {
            let ele = adjacentElements[j];
            map[ele].indegree--;
            if (map[ele].indegree === 0) {
                stack.push(ele);
            }
        }
    }
    return true;   
}

var canFinish = function(numCourses, prerequisites) {
    let map = {};
    let stack = [];
    constructPath(prerequisites, map, numCourses, stack);
    return isTopSort(numCourses, map, numCourses, stack);
};

