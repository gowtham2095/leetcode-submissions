function Node(val, num) {
    this.val = val;
    this.num = num;
    this.children = [];
}

var FileSystem = function() {
    this.root = new Node("/")
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */

function insertPath(root, filePath, pathIndex = 0, value) {
    if (filePath.length - 1 == pathIndex) {
        let childrenPresent = root.children.filter((child) => child.val === filePath[pathIndex])
        if (childrenPresent.length) {
            return false;
        } else {
            let node = new Node(filePath[pathIndex], value);
            root.children.push(node);
            return true;
        }
    }
    
    for (let i = 0; i < root.children.length; i++) {
        if (root.children[i].val === filePath[pathIndex]) {
            return insertPath(root.children[i], filePath, pathIndex + 1, value);
        }
    }
    
    return false;
}

FileSystem.prototype.createPath = function(path, value) {
    let filePath = path.split('/');
    filePath.shift();
    if (filePath[0] == '' || filePath[filePath.length -1] == '')
        return false;
    else
        return insertPath(this.root, filePath, 0, value);
};

/** 
 * @param {string} path
 * @return {number}
 */
function getValueFromFs(root, pathList, index) {
    if (pathList.length - 1 === index) {
        let getValFromList = root.children.filter((child) => child.val == pathList[index]);
        if (getValFromList.length) {
            return getValFromList[0].num;
        } else {
            return -1
        }
    }
    for (let i = 0; i < root.children.length; i++) {
        if (root.children[i].val === pathList[index]) {
            return getValueFromFs(root.children[i], pathList, index + 1);
        }
    }
    return -1;
}

FileSystem.prototype.get = function(path) {
    let pathList = path.split('/');
    pathList.shift()
    return getValueFromFs(this.root, pathList, 0);
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */