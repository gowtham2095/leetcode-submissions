/**
 * @param {string[]} words
 * @return {string}
 */
function Node(ch) {
    this.val = ch;
    this.children = [];
    this.children.length = 255;
    this.isEndOfWord = false
}


function Trie() {
    this.root = new Node(-1);
}

Trie.prototype.insert = function(word, i, root) {
    let children = root.children;
    let child = word[i].charCodeAt(0);
    if (children[child] == undefined) {
        children[child] = new Node(word[i]);
    }
    if (i == word.length - 1) {
        children[child].isEndOfWord = true;
        return;
    }
    this.insert(word, i + 1, children[child]);
}

Trie.prototype.search = function(word, i, root) {
    let child = root.children[word[i].charCodeAt(0)];
    if (child && child.isEndOfWord) {
        if (i == word.length - 1) {
            return true;
        } else {
            return this.search(word, i + 1, child);
        }
    }
    return false;
}



var longestWord = function(words) {
    let trie = new Trie();
    words.forEach((word) => {
       trie.insert(word, 0, trie.root); 
    });
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (trie.search(words[i], 0, trie.root)) {
            result.push(words[i]);
        }
    }
    result.sort((a, b) => b.length - a.length);
    if (result.length) {
        let min = result[0]; 
        let biglength = result[0].length;
        for (let i = 1; i < result.length; i++) {
            if (result[i] < min && result[i].length == biglength)
                min = result[i];
        }
        return min;
    }
    return '';
};






// ["a","banana","app","appl","ap","apply","apple"]



// 1) Form a trie

// 2) Sort the string by length

// 3) And go through each string and search it in trie

// 4) If string forms an end of word at each search all the way till the end then return

// 5) Else return empty string




                        