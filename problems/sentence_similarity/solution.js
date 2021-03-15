/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */

function constructSets(pairs, map) {
    pairs.forEach((pair) => {
       let [a, b] = pair;
       let set = map.get(a)
       if (!set) {
           set = new Set();
           map.set(a, set);
       }
        set.add(b);
        set = map.get(b)
        if (!set) {
          set = new Set();
          map.set(b, set);
        }
        set.add(a);
    });
}

var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length != sentence2.length) {
        return false;
    }
    let map = new Map();
    constructSets(similarPairs, map);
    for (let i = 0; i < sentence1.length; i++) {
        let a = sentence1[i];
        let b = sentence2[i];
        if (a != b) { 
            let set1 = map.get(a);
            let set2 = map.get(b);
            if (!set1 || !set2) {
                return false;
            }
            if (!set1.has(b) || !set2.has(a)) {
                return false
            }
        }
    }  
    return true; 
};




