/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

function charIndex(s) {
    return s.charCodeAt(0) - 97;
}

function Node(val) {
    this.val = val;
    this.children = [];
    this.children.length = 26;
    this.isEndOfWord = false;
}

function Trie() {
    this.root = new Node(-1);
}


Trie.prototype.insert = function (word, i, root) {
    if (i == word.length) {
        root.isEndOfWord = true;
        // console.log(root);
        return 'inserted';
    }
    let letter = word[i];
    let child = root.children[charIndex(letter)];
    if (!child) {
        child = new Node(letter);
        root.children[charIndex(letter)] = child;
    }
    return this.insert(word, i + 1, child);   
}

Trie.prototype.search = function (letter, root) {
    let child = root[charIndex(letter)];
    if (child) {
        if (child.isEndOfWord)
            return true;
        return child;
    }
    return false;
}

function dfs(board, i, j, trie, set, result, path) {
    if (set.has(i + '#' + j))
        return;
    if (i < 0 || j < 0 || i == board.length || j == board[0].length)
        return false;
    
    let letter = board[i][j];
    let child = trie.children[charIndex(letter)];
    if (child) {
        set.add(i + '#' + j);
        if (child.isEndOfWord) {
            result.add(path + letter);
        }
        dfs(board, i + 1, j, child, set, result, path + letter)
        dfs(board, i , j + 1, child, set, result, path + letter)
        dfs(board, i - 1, j, child, set, result, path + letter)
        dfs(board, i, j - 1, child, set, result, path + letter)
        set.delete(i + '#' + j);
    }
}

function performDfs(board, root) {
    let result = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let set = new Set();
            dfs(board, i, j,  root, set, result, '');
            // console.log(set)
        }
    }
    return [...result.values()];
}


var findWords = function(board, words) {
    let trie = new Trie();
    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i], 0, trie.root);
    }
    return performDfs(board, trie.root);
};



// [["o","a","b","n"],
//  ["o","t","a","e"],
//  ["a","h","k","r"],
//  ["a","f","l","v"]]
// ["oa","oaa"]


// [["o","a","a","n"],
//  ["e","t","a","e"],
//  ["i","h","k","r"],
//  ["i","f","l","v"]]


// [["o","a","a","n"],
//  ["e","t","a","e"],
//  ["i","h","k","r"],
//  ["i","f","l","v"]]




// 1) Form a trie with words
// 2) Perform dfs by checking going down the trie
