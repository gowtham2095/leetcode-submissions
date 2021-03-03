/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let totalSeconds = 0;
    let currentPoint = points[0];
    let nextPoint;
    for(let i = 1; i < points.length; i++){
        nextPoint = points[i];
        totalSeconds += Math.max(Math.abs(currentPoint[0] - nextPoint[0]), Math.abs(currentPoint[1] - nextPoint[1]));
        currentPoint = nextPoint;
    } 
    
    return totalSeconds;
};