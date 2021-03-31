/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

function calculatedDistance(x, y) {
   return x * x + y * y;
}

var kClosest = function(points, k) {
    let result = [];
    let plane = [];
    for (let i = 0; i < points.length; i++) {
        plane.push({val: calculatedDistance(points[i][0], points[i][1]), points: points[i]});
    }
    plane.sort((a, b) => {
       return a.val - b.val;
    });
    plane = plane.map((ele) => ele.points);
    return plane.slice(0, k);
};