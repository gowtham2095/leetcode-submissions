/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
function mergeIntervals(intervals) {
   let result = [intervals[0]];
   let i = 1;
   while(i < intervals.length) {
       let prev = result.pop();
       let current = intervals[i];
       if (current[0] <= prev[1]) {
           let left = Math.min(current[0], prev[0]);
           let right = Math.max(current[1], prev[1]);
           result.push([left, right]);
       } else {
           result.push(prev);
           result.push(current);
       }
       i++;
   }
   return result;
}

function addTag(intervals, s) {
    let resultString = '';
    let i = 0;
    let strPtr = 0;
    while(i < intervals.length) {
        while(intervals[i][0] != strPtr) {
            resultString += s[strPtr];
            strPtr++;
        }
        resultString += '<b>';
        while(intervals[i][1] != strPtr) {
            resultString += s[strPtr];
            strPtr++;
        }
        resultString += '</b>';
        i++;
    }
    while(strPtr < s.length) {
        resultString += s[strPtr];
        strPtr++;
    }
    return resultString;
}

function addBoldTagToString(s, words) {
    let intervals = [];
    for(let word of words) {
        let indexOfWord = s.indexOf(word);
        
        while(indexOfWord !== -1) {
           intervals.push([indexOfWord, indexOfWord + word.length]);
           indexOfWord = s.indexOf(word, indexOfWord + 1);
        }
    }
    intervals.sort((a, b) => a[0] - b[0]);
    if (intervals.length == 0) {
        return s;
    }
    intervals = mergeIntervals(intervals);
    
    return addTag(intervals, s);
}

var addBoldTag = function(s, words) {
    return addBoldTagToString(s, words);
};


// abcxyz123



// "a": ["bc"]



// "1" : ["23"]

// str -> "bcc"
// set -> ["aaa","aab","bc"]

// abbcc

// "a": ["aa", "ab", "a", "b", ""]

// "b": ["c", ""]

// "c": [""]





// two cases
//     i) combine the consecutive ones
//     ii) Overlapping ones