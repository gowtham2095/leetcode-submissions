/**
 * @param {string} s
 * @return {number[][]}
 */



function formGroups(s) {
    let result = [];
    let prev = s[0];
    let start = 0;
    for (var i = 1; i < s.length; i++) {
         if (prev != s[i]) {
            let diff = i - start;
            if (diff >= 3)
                result.push([start, i - 1]);
            start = i; 
        }
        prev = s[i];
    }
    
    
    if (i - start >= 3) {
        result.push([start, i - 1]);
    }
    return result;
}

var largeGroupPositions = function(s) {
    return formGroups(s);
};




// abcdddeeeeaabbbcd
// 01234567890123456




// 3, 5




// 1) see where the difference is 

// and if the difference of two indices + 1 >= 3 add it to the rezult






