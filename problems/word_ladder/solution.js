/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */



function performBfs(beginWord, endWord, wordList) {
    
    let queue = new Queue();
    let ladder = 1;
    queue.enqueue(beginWord);
    let visited = new Set();
    while(queue.size()) {
        let k = queue.size();
        while(k--) {
            let word = queue.dequeue();
            visited.add(word);
            if (word == endWord)
                return ladder;
            let temp = '';
            for (let l = 0; l < word.length; l++) {
                let ch = word[l];
                for (let i = 0; i < 26; i++) {
                    let str = word.slice(0, l) + String.fromCharCode(97 + i) + word.slice(l + 1, word.length);
                    // console.log(str)
                    if (wordList.has(str) && !visited.has(str)) {
                        queue.enqueue(str);
                    }
                }
            }
        }
        ladder++; 
    }
    return 0;
    // console.log(queue.dequeue());
}

var ladderLength = function(beginWord, endWord, wordList) {
    let set = new Set(wordList);
    return performBfs(beginWord, endWord, set);
};



// "hit"


// "cog"


// "hit" -> "hot" -> "dot" -> "dog" -> "cog"



// hit -> [hot]

// hot -> [hit, dot]

// dot -> [dog]

// dog -> [cog, log]

// cog -> [log]


// 1) Form an edge between each words if it only differs by one letter

// 2) Start from the given node and traverse till the destination

// 3) If the destination is seen then return that as the first visited position and return the level length

// dictionary = ["hot","dot","dog","lot","log","cog"]

// "hit" -> "hot" -> "dot" -> "dog" -> "cog"

//     h   c   d
//     |\  |  /
//     i   o  
//      \ /  \
//       t    g
      
      
      
      
      
//       h       i, o





// hit hot hog