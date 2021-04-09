/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */



function findSubsequenceExists(s, r, rPtr) {
    if (rPtr == r.length)
        return true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == r[rPtr] && findSubsequenceExists(s.slice(i + 1, s.length), r, rPtr + 1)) {
            return true;
        }
    }
    return false;
}


function movingNextPtrs(s, words) {
    let map = new Map();
    let count = 0;
    for (let word of words) {
        if (!map.has(word[0])) {
            map.set(word[0], [])
        }
        map.get(word[0]).push(word.split(''));
    }
    
    for (let ch of s) {
        let list = map.get(ch);
        if (!list)
            continue;
        map.delete(ch);
        for (let l of list) {
            l.shift();
            if (l.length == 0) {
                count++;
            } else if (map.has(l[0])) {
                map.get(l[0]).push(l);
            } else {
                map.set(l[0], [l]);
            }
        }
    }
    
    return count;
}

var numMatchingSubseq = function(s, words) {
    // let count = 0;
    // for (let i = 0; i < words.length; i++) {
    //     if (findSubsequenceExists(s, words[i], 0)) {
    //         count++;
    //     }
    // }
    // return count;
    return movingNextPtrs(s, words);
};



// "abcde"


// "bb"


// a  b  c  d  e



// "a" , "bb" ,"acd" , "ace" 




// a -> {b, c, d, e}

// b -> {c, d, e}

// c -> {d, e}

// d -> {e}

// e -> {}


// if only single letter and if that single, letter exist then green signal



// "dsahjpjauf"





// p -> {j, a, u, f}



// a -> {u, f}

// u -> {f}

// f -> {}


// s = "abcde"


// words = ["a","bb","acd","ace"]


// "a b c d a b"



// "adab"

// b -> {a, b, c}

// c -> {a, b, d}

// d -> {a, b}

// a -> {b}

// b -> {}





