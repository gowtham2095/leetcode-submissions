/**
 * Initialize your data structure here.
 */

function Node(val) {
    this.val = val;
    this.children = [];
    this.children.length = 26;
    this.isEndOfWord = false;
}

function Trie() {
    this.root = new Node(-1);
}


Trie.prototype.insert = function(word, i, root) {
    let child = root.children[word[i].charCodeAt(0)];
    if (child == undefined) {
        root.children[word[i].charCodeAt(0)] = new Node(word[i]);
        child = root.children[word[i].charCodeAt(0)];
    }
    if (i == word.length - 1) {
        child.isEndOfWord = true;
        return;
    }
    this.insert(word, i + 1, child);
}


Trie.prototype.search = function(word, i, root) {
    if (i >= word.length)
        return false;
    let children = root.children;
    if (word[i] == '.') {
        for (let j = 0; j < children.length; j++) {
            if (children[j]) {
                if (i == word.length - 1 && children[j].isEndOfWord) {
                    return true;
                } else if (this.search(word, i + 1, children[j])) {
                    return true;
                }
            }
        }
        return false;
    } else {
        let child = children && children[word[i].charCodeAt(0)];
        if (child == undefined) {
            return false;
        } else {
            if (i == word.length - 1) {
                return child.isEndOfWord;
            }
            return this.search(word, i + 1, child);
        }
    }
}


var WordDictionary = function() {
    this.trie = new Trie();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.trie.insert(word, 0, this.trie.root);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.trie.search(word, 0, this.trie.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */





