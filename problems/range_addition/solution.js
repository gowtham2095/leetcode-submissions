/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
        
    let result = [];
    result.length = length;
    
    result.fill(0);
        
    updates.forEach((update, index) => {
        let startIndex = update[0];
        let endIndex = update[1];
        let value = update[2];
        
        result[startIndex] += value;
        if (endIndex < length - 1)
            result[endIndex + 1] -= value;
    });
    let sum = 0;
    for(let i = 0; i < length; i++) {
        result[i] += sum;
        sum = result[i];
    }
    
    return result;
    
};