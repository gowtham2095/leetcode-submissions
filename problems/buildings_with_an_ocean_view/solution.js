/**
 * @param {number[]} heights
 * @return {number[]}
 */

function canSeeOcean(heights) {
    let right = heights.length;
    let max = -Infinity;
    let result = [];
    while(right >= 0) {
        if (max < heights[right]) {
            result.push(right);
            max = heights[right];
        }
        right--;
    }
    return result.reverse();
}

var findBuildings = function(heights) {
    return canSeeOcean(heights);
};


// [4,2,3,1]
//          max = -Infinity

        
