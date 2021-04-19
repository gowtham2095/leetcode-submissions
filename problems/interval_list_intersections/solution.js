/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
function getIntervalIntersection(A, B) {
    let i = 0;
    let j = 0;
    let result = []
    let higherIntervalToCheck;
    while (i < A.length && j < B.length) {
        let AStart = A[i][0];
        let BStart = B[j][0];
        let AEnd = A[i][1];
        let BEnd = B[j][1];
        if (AStart > BEnd) {
            j++;
        } else if (BStart > AEnd) {
            i++;
        } else {
            let intersection = [Math.max(AStart, BStart), Math.min(AEnd, BEnd)];
            result.push(intersection);
            if (AEnd > BEnd) {
                j++;
            } else if (BEnd > AEnd) {
                i++;
            } else {
                i++;
                j++;
            }
        }
    }
    return result;
}


var intervalIntersection = function(firstList, secondList) {
    return getIntervalIntersection(firstList, secondList);
};

// The main result list = A, B


// Max of start and Minimum of end


