/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */


function Node(val) {
    this.val = val;
    this.children = [];
}

function traverseTree(root, result = []) {
    if (root != null) {
        result.push(root.val);
        root.children.forEach((child) => {
           traverseTree(child, result); 
        });
    }
}

var killProcess = function(pid, ppid, kill) {
    
    let pidMap = {};
    
    pid.forEach((id) => {
        pidMap[id] = new Node(id);
    });
    let head = null;
    for (let i = 0; i < ppid.length; i++) {
        let childValue = pid[i];
        let parentValue = ppid[i];
        let parentNode = pidMap[parentValue];
        let childNode = pidMap[childValue];
        if (parentValue === 0) {
            head = childNode;
        } else {
            parentNode.children.push(childNode);
        }
    }
    
    let killNode = pidMap[kill];
    
    let result = [];
    
    traverseTree(killNode, result)
    
    return result;
    
};