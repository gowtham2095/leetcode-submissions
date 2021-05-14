/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */


function areTheSimilar(sentence1, sentence2, similarityMap) {
    if (sentence1.length != sentence2.length)
        return false;
    for (let i = 0; i < sentence1.length; i++) {
        let word1 = sentence1[i];
        let word2 = sentence2[i];
        let similaritySet = similarityMap[word1];
        if (!similaritySet.has(word2))
            return false;  
    }
    return true;
}

var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    let similaritySet = new Set();
    let similarityMap = {};
    
    for (let word of sentence1) {
        let currentSet = similarityMap[word];
        if (currentSet == undefined) {
            similarityMap[word] = new Set()
            similarityMap[word].add(word);
        }
    }
    for (let word of sentence2) {
        let currentSet = similarityMap[word];
        if (currentSet == undefined) {
            similarityMap[word] = new Set()
            similarityMap[word].add(word);
        }
    }
    for (let pair of similarPairs) {
        let [firstpair, secondpair] = pair;
        let getSet = similarityMap[firstpair];
        if (getSet != undefined) {
            getSet.add(secondpair);
        }
        getSet = similarityMap[secondpair];
        if (getSet != undefined) {
            getSet.add(firstpair);
        }
    }
    return areTheSimilar(sentence1, sentence2, similarityMap);
};





// sentence 1 -> ["great","acting","skills"]

// sentence2 = ["fine","drama","talent"]

// similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]]



// ["great"]

// great: new set(great, fine)

// sentence1 = ["great"]

// sentence2 = ["doubleplus","good"]

// [["great","doubleplus"]]



