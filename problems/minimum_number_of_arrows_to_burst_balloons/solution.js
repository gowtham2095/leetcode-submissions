/**
 * @param {number[][]} points
 * @return {number}
 */



function findMinShots(points) {
    let last = points[0];
    let count = 1;
    for (let i = 1; i < points.length; i++) {
        if (last[1] < points[i][0]) {
            count++;
            last = points[i];
        }
    }
    return count;
}

var findMinArrowShots = function(points) {
    if (points.length == 0)
        return 0;
    points.sort((a, b) => a[1] - b[1]);
    return findMinShots(points);
};

//                                                              10, 16


// [10,16],                                7, 12
//  [2,8],
//  [1,6],
//  [7,12]
//                       2,8



//                   1, 6




//             0, 0   1    2                                         10

// 1, 6  2, 8,   7, 12  10, 16

//  [1,2], [3,4], [5,6], [7,8]]
 
 
//  [[1,2],[2,3],[3,4],[4,5]]



// 1, 6     2, 8,   7, 12    10, 16

