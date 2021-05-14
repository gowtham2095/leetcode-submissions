/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */

function UnionFind(numberOfVertices) {
    this.parent = [];
    for (let i = 0; i < numberOfVertices; i++) {
        this.parent[i] = i;
    }
}

UnionFind.prototype.find = function(num) {
    let parent = this.parent[num];
    if (parent != num)
        return this.parent[num] = this.find(parent);
    return parent;
}

UnionFind.prototype.union = function(parent1, parent2) {
    this.parent[parent1] = parent2;
}

function areTheySimilar(words1, words2, dsa, wordMap) {
    if (words1.length != words2.length)
        return false;
    for (let i = 0; i < words1.length; i++) {
        let word1 = wordMap[words1[i]];
        let word2 = wordMap[words2[i]];
        let firstWord = dsa.find(word1);
        let secondWord = dsa.find(word2);
        if (firstWord != secondWord)
            return false;
    }
    return true;
}

var areSentencesSimilarTwo = function(words1, words2, pairs) {
    let formSet = new Set([...words1, ...words2]);
    // console.log(formSet);
    for (let words of pairs) {
        let [firstword, secondword] = words;
        formSet.add(firstword);
        formSet.add(secondword);
    }
    let i = 0;
    let wordMap = {};
    // console.log(formSet);
    for (let word of formSet.values()) {
        if (wordMap[word] == undefined) {
            wordMap[word] = i;
            i++;
        }
    }
    // console.log(wordMap)
    let dsa = new UnionFind(i);
    for (let words of pairs) {
        let [firstword, secondword] = words;
        let word1Map = wordMap[firstword];
        let word2Map = wordMap[secondword];
        let word1 = dsa.find(word1Map);
        let word2 = dsa.find(word2Map);
        if (word1 != word2) {
            dsa.union(word1, word2);
        }
    }
    // console.log(dsa)
    return areTheySimilar(words1, words2, dsa, wordMap);
};


// words1 = ["great", "acting", "skills"]
// words2 = ["fine", "drama", "talent"]

// pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]]






// "great":  0
// "acting": 1
// "skills": 2
// "fine":   3
// "drama":  4
// "talent": 5
// "good": 6






// parent -> 0, 4, 5, 6, 4, 5, 0
//           0. 1  2  3  4  5   6


// find ( index 0)
 
// find(fine)









