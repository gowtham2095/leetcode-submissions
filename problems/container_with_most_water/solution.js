/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    
    while(i < j) {
        let towerHeight = Math.min(height[i], height[j]);
        let waterCapacity = towerHeight * (j - i);
        max = Math.max(max, waterCapacity);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    
    return max;
};