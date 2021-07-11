/**
 * @param {number[]} tree
 * @return {number}
 */
function deleteFromMap(map, prev) {
    for (let key in map) {
        if (key != prev) {
            delete map[key];
        }
    }
}

function getMaxTreeValue(tree) {
    let mapOfTree = {};
    mapOfTree[tree[0]] = 0;
    let i = 1; 
    let startPtr = 0;
    let prev = tree[0];
    let max = -Infinity;
    while(i < tree.length) {
        if (prev != tree[i]) {
            if (mapOfTree[[tree[i]]] != undefined) {
                mapOfTree[tree[i]] = i;
            } else {
                if (Object.keys(mapOfTree).length == 2) {
                    max = Math.max(max, i - startPtr);
                    startPtr = mapOfTree[prev];
                    deleteFromMap(mapOfTree, prev);
                }
                mapOfTree[tree[i]] = i;   
            }
        }
        prev = tree[i];
        i++;
    }
    max = Math.max(max, i - startPtr);
    return max;
}


[3,3,3,1,2,1,1,2,3,3,4]

var totalFruit = function(tree) {
    return getMaxTreeValue(tree);
};


// trees -> l to r



// []


// two baskets


// limitless 





// [0,1,2,2]


// [3,3,3,1,2,1,1,2,3,3,4]
 

// [3,3,3,1,2,1,1,2,2,2,2,3,3,4]

// max = 4
// startPtr = 3
// prev 

// {
//     2: 12
//     1: 8
// }



// startPtr = 3
//      5
     
//  {
//      2: 7
//      1: 6
//  }




// left 
// right

// max = (right - left + 1)
// max = 
// seen: {
//     1: true
//     2: true
// }

// {
//     tree1: 4 
//     tree2: 3
// }

// left = 3