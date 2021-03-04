/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let mapStr = {};
    let str = s.split('');
    
    str.forEach((ch) => {
      if (!mapStr[ch]) {
          mapStr[ch] = 1;
      } else {
          delete mapStr[ch];
      } 
    })
    
    let keys = Object.keys(mapStr);
    return keys.length > 1 ? false : true;
};