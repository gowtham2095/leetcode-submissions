/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */


// O(h + w) time and O(h + w) space
function findMaxCut(h, w, horizontalCuts, verticalCuts) {
    
    let hor = [];
    hor[0] = 1;
    hor[h] = 1;
    for (let index of horizontalCuts) {
        hor[index] = 1;
    }
    let ver = [];
    ver[0] = 1;
    ver[w] = 1;
    for (let index of verticalCuts) {
        ver[index] = 1;
    }
    
    // console.log(hor, ver)
    let horMax = 0;
    let lastIndex = 0;
    for (let i = 1; i <= h; i++) {
        if (hor[i] == 1) {
            // console.log('test');
            horMax = Math.max(horMax, i - lastIndex);
            lastIndex = i;
        } 
    }
    let vermax = 0;
    lastIndex = 0;
     for (let i = 1; i <= w; i++) {
        if (ver[i] == 1) {
            vermax = Math.max(vermax, i - lastIndex);
            lastIndex = i;
        }
    }
    
    return horMax * vermax;
}


function findMaxCutCake(horizontalCuts, verticalCuts) {
    let horMax = 0;
    let verMax = 0;
    
    let prev = horizontalCuts[0];
    for (let i = 1; i < horizontalCuts.length; i++) {
        horMax = Math.max(horMax, horizontalCuts[i] - prev);
        prev = horizontalCuts[i];
    }
    
    prev = verticalCuts[0];
    for (let i = 1; i < verticalCuts.length; i++) {
        verMax = Math.max(verMax, verticalCuts[i] - prev)
        prev = verticalCuts[i];
    }
    
    return horMax * verMax % 1000000007;
}


var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    // return findMaxCut(h, w, horizontalCuts, verticalCuts);

    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    horizontalCuts.unshift(0);
    horizontalCuts.push(h);
    verticalCuts.unshift(0);
    verticalCuts.push(w);
    return findMaxCutCake(horizontalCuts, verticalCuts);
};








// 1. 1. 0  1. 0  1 
// 0, 1, 2, 3, 4, 5


// 1. 1        1
// 0, 1, 2, 3, 4

