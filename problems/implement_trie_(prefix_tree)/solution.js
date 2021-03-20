/**
 * Initialize your data structure here.
 */
function Node(val) {
    this.val = val;
    this.children = [];
    this.isEndNode = false;
}

var Trie = function() {
    this.root = new Node(-1);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let isPresent = node[word.charCodeAt(i)];
        if (!isPresent) {
            let newNode = new Node(word[i]);
            node[word.charCodeAt(i)] = newNode;
        }
        node = node[word.charCodeAt(i)];
    }
    node.isEndNode = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let isPresent = node[word.charCodeAt(i)];
        if (!isPresent) {
            return false;
        }
        node = node[word.charCodeAt(i)];
    }
    if (!node.isEndNode) {
        return false;
    }
    return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let isPresent = node[prefix.charCodeAt(i)];
        if (!isPresent) {
            return false;
        }
        node = node[prefix.charCodeAt(i)];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */