/**
 * @param {string[]} words
 */
function Node(val) {
    this.val = val;
    this.children = [];
    this.isEnd = false;
    this.word = '';
}


function Trie() {
    this.root = new Node(-1);
}

Trie.prototype.insert = function(word, level, root) {
    // console.log(level, root)
    let children = root.children[word[level].charCodeAt(0)];
    if (children == undefined) {
        root.children[word[level].charCodeAt(0)] = new Node(word[level]);
        children = root.children[word[level].charCodeAt(0)];
    }
    if(level == word.length - 1) {
        children.isEnd = true;
        children.word = word;
        return;
    }
    this.insert(word, level + 1, children);
}


Trie.prototype.getNextPtr = function (root, childCharacter) {
    let children = root.children[childCharacter.charCodeAt(0)];
    return children;
}

var StreamChecker = function(words) {
    this.nodesList = [];
    this.resultList = [];
    this.trie = new Trie();
    for (let word of words) {
        this.trie.insert(word, 0, this.trie.root);
    }
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    // iterate through previous list and advance the pointers
    let newList = [];
    let isAnyTrue = false;
    for (let i = 0; i < this.nodesList.length; i++) {
        let root = this.nodesList[i];
        let cPtr = this.trie.getNextPtr(root, letter);
        if (cPtr != undefined) {
            newList.push(cPtr);
            if (cPtr.isEnd == true) {
                this.resultList.push(cPtr.word);
                isAnyTrue = true;
            }
        }
    }
    this.nodesList = newList;
    let root = this.trie.root;
    let currentPtr = this.trie.getNextPtr(root, letter);
    if (currentPtr != undefined) {
        this.nodesList.push(currentPtr);
        if (currentPtr.isEnd == true) {
            isAnyTrue = true;
        }
    }
    return isAnyTrue;
};



/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */


// set = {cd, f, kl, def}

// abcdef



// formstr = 'abcd'

// c - > d
//       |
//       e
//       |
//       f
//                       trie
//                   / |  |   | \
                    
//                 c   d   e   f   k
                
//                 d    e   f      l
                
//                 e     f                     
                
//                 f
                
//                 g
                
                
                
//              if they reach the word add them to the result and remove it from the list
//              if it is not present then remove them from the list of nodes to check
//                 [trie nodes]
//                 []
                
//                 two pointers 
//                     one is for previous if it continues and another one is for new