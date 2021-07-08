/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

function slideWindow(source, target) {
    let targetMap = {};
    for (let i = 0; i < target.length; i++) {
        if (targetMap[target[i]] == undefined) {
           targetMap[target[i]] = 1; 
        } else {
            targetMap[target[i]]++;
        }
    }
    let windowMap = {};
    let leftPtr = 0;
    let rightPtr = 0;
    let formed = 0;
    let min = Infinity;
    let minStr = ''
    while(rightPtr < source.length) {
        let character = source[rightPtr];
        if (targetMap[character]) {
            windowMap[character] = windowMap[character] ? windowMap[character] + 1 : 1;
            if (windowMap[character] >= targetMap[character]) {
                formed++;
            }
        }
        while(leftPtr <= rightPtr && formed == Object.keys(targetMap).length) {
            console.log(leftPtr, rightPtr)
            if (min > rightPtr - leftPtr) {
                min = rightPtr - leftPtr;
                minStr = source.substring(leftPtr, rightPtr + 1);
            }
            if (windowMap[source[leftPtr]]) {
                windowMap[source[leftPtr]] = windowMap[source[leftPtr]] - 1;
                if (windowMap[source[leftPtr]] < targetMap[source[leftPtr]])
                    formed--;
            }
            leftPtr++;
        }
        
        rightPtr++;
    }
    
    return minStr;
}

function mininumWindow(s, t) {
    // let sourceMap = {};
    let targetMap = {};
    
    let i = 0;
    // while(i < s.length) {
    //     if (sourceMap[s[i]] == undefined)
    //         sourceMap[s[i]] = 0;
    //     sourceMap[s[i]]++;
    //     i++;
    // }
    // i = 0;
    while(i < t.length) {
        if (targetMap[t[i]] == undefined)
            targetMap[t[i]] = 0;
        targetMap[t[i]]++;
        i++;
    }
    
    let left = 0;
    let right = 0;
    let windowCount = 0;
    let windowMap = {};
    let leftMin = -1;
    let rightMin = -1;
    let targetCount = Object.keys(targetMap).length;
    let min = Infinity;
    while(right < s.length) {
        if (windowMap[s[right]] == undefined)
            windowMap[s[right]] = 0;
        windowMap[s[right]]++;
        if (windowMap[s[right]] == targetMap[s[right]]) {
            // console.log(windowCount, '123', left, right);
            windowCount++;
        } 
        while(windowCount == targetCount && left <= right) {
            // console.log('this')
            if (right - left < min) {
                leftMin = left;
                rightMin = right;
                min = right - left;
            }
            windowMap[s[left]]--;
            if (windowMap[s[left]] < targetMap[s[left]]) {
                windowCount--;
            }
            left++;
        }
        right++;
    }
    // console.log(leftMin, rightMin);
    return leftMin == -1 ? '' : s.slice(leftMin, rightMin + 1);
    
}

var minWindow = function(s, t) {
    return mininumWindow(s, t);
};


// 1) First form a string with all the values are present
// 2) Once found move the index to the beginning of second element from the left in the index
// 3) keep increasing the right
// 4) If you find an element that is already present 

// How will I know automatically that the string is formed
// "ADOBECODEBANC"
// map = {
//     a: index
// }
    
//  012345678910 11 12
// "ADOBECODEB A N  C "
// "ABC"

