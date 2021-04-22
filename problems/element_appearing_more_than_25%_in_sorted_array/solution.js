/**
 * @param {number[]} arr
 * @return {number}
 */
function findSplInteger(arr) {
    let map = {};
    arr.forEach((ele) => {
        if(map[ele] == undefined)
            map[ele] = 0;
        map[ele]++;
    })
    
    for (let ele of arr) {
        if (map[ele]/arr.length > 0.25)
            return ele;
    }
}

var findSpecialInteger = function(arr) {
    return findSplInteger(arr);
};



// element count / number of elements = > 0.25