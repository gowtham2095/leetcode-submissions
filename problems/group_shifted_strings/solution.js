/**
 * @param {string[]} strings
 * @return {string[][]}
 */

function computeSequenceKey(str) {
    if (str.length == 1)
        return 0;
    let prev = str[0];
    let i = 1;
    let key = '';
    
    while(i < str.length) {
        let a = prev.charCodeAt(0);
        let b = str[i].charCodeAt(0);
        if (b < a) {
            b = b + 26;
        }
        key += '#' + (b - a);
        prev = str[i];
        i++;
    }
    return key;
}

function formStrings(strings) {
    let sequenceMap = {};
    strings.forEach((str) => {
        let key = computeSequenceKey(str);
        if (sequenceMap[key] == undefined) {
            sequenceMap[key] = [];
        }
        sequenceMap[key].push(str);
    });
    let result = Object.keys(sequenceMap).map((key) => sequenceMap[key]);
    return result;
}

var groupStrings = function(strings) {
    return formStrings(strings);
};



// abc -> bcd -
    
    
//     b =  2    a = 25;


// acef
// 2

// b

// ba

// a
// z



// 123


// 234
//  11

// xyz
//  11

// acef

// 221


// az
// [25
 
 
//  a, z
 
//  26+ 1 - 2
//  b a
//  25
 
 
//  az
//  25
 
 
 
//  if length == 1