/**
 * @param {string[]} words
 * @return {string}
 */

// function Node(val) {
//     this.val = val;
//     this.children = [];
//     this.childrenMap = new Map();
// }




function kahnsGraph(words) {
    let degree = {};
    let wordMap = {};
    
    for (let word of words) {
        for (let ch of word) {
            degree[ch] = 0;
        }
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        let cur = words[i];
        let next = words[i+1];
        let len = Math.min(cur.length, next.length);
        // console.log(len)
        if (cur.length > next.length && cur.startsWith(next)) {
                return "";
        }
        for (let j = 0; j < len; j++) {
            let c1 = cur[j];
            let c2 = next[j];
            // console.log(c1, c2)
            if (c1 != c2) {
                let set = new Set();
                if (wordMap[c1] != undefined) {
                    set = wordMap[c1]
                }
                if (!set.has(c2)) {
                    set.add(c2);
                    wordMap[c1] = set;
                    degree[c2] = degree[c2] + 1;
                }
                break;
            }
        }
    }
    
    // console.log(wordMap, degree)
    let queue = [];
    
    for (let key in degree) {
        if (degree[key] == 0) {
            queue.push(key);
        }
    }
    let result = '';
    while(queue.length) {
        let ch = queue.shift();
        result += ch;
        if (wordMap[ch] != undefined) {
            for (let c of wordMap[ch]) {
                // console.log(c)
                degree[c] = degree[c] - 1;
                if (degree[c] == 0)
                    queue.push(c);
            }
        }
    }
    // console.log()
    return result.length != Object.keys(degree).length ? '' : result;
}

var alienOrder = function(words) {
    return kahnsGraph(words);
};

    
    
//    w             e               r
   
//    r            r   t               f     
   
//    t    f              t               t
                                           
//                                             t
    
                                        
                                        
//                                         w -> r -> t -> f
                                        

//     "wrt","wrf","er","ett","rftt"
    
    
    
    
    
//     "w"
    
//     "e"
    
    
    
    
//     w -> r -> t
//     |       -> f
//     e ->
    
        
//             w
    
//             e
            
//             r  t
    
//             f
    
    
                                                   
//   ["wrt","wrf","er","ett","rftt"]


//          w             e        r
         
//          r              r  t      f      
         
//        t   f            t           t
                         
//                                       t
                                      
                                      
                                      
//                     [w, e]
//                     [e, r]
//                     [r, t]
//                     [t, f]


//             z     x    z 
                                      
                                      
//                                    r  ->  t

//                                    t  ->  f