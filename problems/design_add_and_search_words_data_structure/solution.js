/**
 * Initialize your data structure here.
 */

function Node(val) {
    this.val = val;
    this.children = [];
    this.isEndOfWord = false;
}

var WordDictionary = function() {
    this.trie = new Node(-1);
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for (let i = 0; i < word.length; i++) {
        let childNode = node.children[word[i].charCodeAt(0) - 97];
        if (!childNode) {
            childNode = new Node(word[i]);
            node.children[word[i].charCodeAt(0) - 97] = childNode;
        }
        node = childNode;
    }
    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
function searchInTrie(word, trie) {
    let node = trie;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == '.') {
            let isAnyTrue = false; 
            for(let j = 0; j < node.children.length; j++) {
                if (node.children[j]) {
                    let wordNew = word.slice(i + 1, word.length);
                    isAnyTrue = isAnyTrue || searchInTrie(wordNew, node.children[j]);
                    if (isAnyTrue) {
                        return true;
                    }
                }
            }
            
            return false
        }
        node = node.children[word[i].charCodeAt(0) - 97];
        if (!node) {
            return false;
        }
    }
    
    if (node.isEndOfWord) {
        return true;
    }
    
    return false;
}

WordDictionary.prototype.search = function(word) {
    return searchInTrie(word, this.trie);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */




// apple


// [0]