/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */



function MaxHeap(size) {
    this.list = [];
    this.capacity = size;
    this.list.push({val: Infinity, word: ''});
    this.heapSize = 0;
}



8, 6, 5, 5, 10

Infinity 



// While inserting if two elements are equal

// One with the lower alphabetical order should be returned


//         love 
        
//     i

MaxHeap.prototype.insert = function(word, val) {
    for (var i = ++this.heapSize; this.list[Math.floor(i/2)].val <= val; i = Math.floor(i/2)) {
        if (this.list[Math.floor(i/2)].val == val && this.list[Math.floor(i/2)].word < word) {
            break;
        }
            this.list[i] = this.list[Math.floor(i/2)];
    }
    this.list[i] = {
        val: val,
        word: word
    }
}


MaxHeap.prototype.remove = function () {
    let max = this.list[1];
    let last = this.list[this.heapSize--];
    let child;
    for (var i = 1; i * 2 <= this.heapSize; i = child) {
        child = i * 2;
        if (child + 1 <= this.heapSize) {
            if (this.list[child + 1].val > this.list[child].val)
                child++;
            else if (this.list[child + 1].val == this.list[child].val && this.list[child + 1].word > this.list[child].word) {
                child++;
            } 
        }
            
        if (this.list[child].val >= last.val) {
            this.list[i] = this.list[child];
        } else {
            break;
        }
    }
    this.list[i] = last
    return max;
}



function constructWordMap(words) {
    let wordMap = {};
    words.forEach((word) => {
       if (wordMap[word] == undefined) {
           wordMap[word] = 0;
       }
        wordMap[word]++;
    });
    return wordMap;
}

function getKFrequentElement(wordMap, k) {
    let words = Object.keys(wordMap);
    let result = [];
    let maxHeap = new MaxHeap(Infinity);
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        maxHeap.insert(word, wordMap[word]);
    }
    // console.log(maxHeap.list);
    for (let i = 0; i < k; i++) {
        let word = maxHeap.remove();
        result.push(word.word);
    }
    return result;
}

var topKFrequentWords = function(words, k) {
    let hash = {};
    for (let word of words) {
        hash[word] = hash[word]+1||1;
    }
    let result = Object.keys(hash).sort((a,b)=>{
            let countCompare = hash[b] - hash[a];
            if (countCompare == 0) return a.localeCompare(b);
            else return countCompare;
        }   
    );
    return result.slice(0, k);
};

var topKFrequent = function(words, k) {
    // let wordMap = constructWordMap(words);
    // return getKFrequentElement(wordMap, k);
    
    return topKFrequentWords(words, k)
};






// maxHeap and insert all elements with 