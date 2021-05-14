/**
 * @param {string[]} sentences
 * @param {number[]} times
 */

function Node(val) {
    this.val = val;
    this.children = [];
    this.children.length = 256;
    this.isEndOfSentence = false;
}

function Trie() {
    this.root = new Node(-1);
}

function insertSentence(root, str, i) {
    let children = root.children;
    if (root.children[str[i].charCodeAt(0)] == undefined) {
        root.children[str[i].charCodeAt(0)] = new Node(str[i]);
    }
    if (i == str.length - 1) {
        root.children[str[i].charCodeAt(0)].isEndOfSentence = true;
        return;
    } else {
        insertSentence(root.children[str[i].charCodeAt(0)], str, i + 1);
    }
}

Trie.prototype.insert = function (str) {
    insertSentence(this.root, str, 0);
}


function getAllSentences(root, sentenceFormed, result) {
    if (root.isEndOfSentence) {
        result.push(sentenceFormed);
    }
    let children = root.children;
    children.forEach((child) => {
        if (child) {
            getAllSentences(child, sentenceFormed + child.val, result);
        }
    });
}


Trie.prototype.search = function (root, ch, word) {
    if (root == undefined)
        return [root, []];
    let children = root.children;
    let i = 0;
    let child = children[ch.charCodeAt(0)];
    if (child == undefined)
        return [child, []];
    let result = [];
    getAllSentences(child, word, result);
    return [child, result];
}

var AutocompleteSystem = function(sentences, times) {
    this.hotnessMap = {};
    this.prefixTree = new Trie();
    this.currentPrefixNode = this.prefixTree.root;
    for (let i = 0; i < sentences.length; i++) {
        this.hotnessMap[sentences[i]] = times[i];
        this.prefixTree.insert(sentences[i]);
    }
    this.currentSearch = '';
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if (c == '#') {
        if (this.hotnessMap[this.currentSearch] == undefined) {
            this.hotnessMap[this.currentSearch] = 0;
            this.prefixTree.insert(this.currentSearch);
        }
        this.hotnessMap[this.currentSearch]++;
        this.currentSearch = '';
        this.currentPrefixNode = this.prefixTree.root;
        return [];
    } else {
        this.currentSearch += c;
        let [currentPrefix, result] = this.prefixTree.search(this.currentPrefixNode, c, this.currentSearch);
        this.currentPrefixNode = currentPrefix;
        result.sort((a, b) => {
            return a == b ? a < b :  this.hotnessMap[b] - this.hotnessMap[a];
        });
        return result.length > 2 ? result.slice(0, 3) : result;
    }
    
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */