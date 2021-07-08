/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

function fullJustifySentence(words, maxWidth) {
    let result = [];
    let i = 0;
    while(i < words.length) {
        let availableSpace = maxWidth;
        let lineWords = [];
        let currentSpace = 0;
        while(words[i] && maxWidth >= currentSpace + words[i].length) {
            lineWords.push(words[i]);
            currentSpace = currentSpace + words[i].length + 1;
            i++;
        }
        if (i >= words.length) {
            let lineWord = lineWords.join(' ');
            let spacesLength = maxWidth - lineWord.length;
            lineWord = lineWord + ' '.repeat(spacesLength);
            result.push(lineWord);
            return result;
        }
        currentSpace--;
        let line = '';
        if (lineWords.length == 1) {
            line = lineWords[0] + ' '.repeat(maxWidth - currentSpace);
        } else {
            let totalSpace = (lineWords.length - 1) + (maxWidth - currentSpace);
            let spaces = [];
            let spacesBetween = Math.floor(totalSpace / (lineWords.length - 1));
            let remainingSpace = totalSpace % (lineWords.length - 1);
            for (let i = 0; i < lineWords.length - 1; i++) {
                spaces[i] = spacesBetween + (remainingSpace > 0 ? 1 : 0);
                remainingSpace--;
            }    
            let k = 1;
            for (let i = 1; i < lineWords.length; i++) {
                line = line + (lineWords[i - 1] + ' '.repeat(spaces[i - 1]));
                k = i;
            }
            line += lineWords[k];
        }
        result.push(line);
    }
    return result;
}
var fullJustify = function(words, maxWidth) {
    return fullJustifySentence(words, maxWidth);
};



// "This", "is", "an", "example", "of", "text", "justification."

// Each element in an array is a line


// maxWidth




// "This    is    an",
// "example  of text",
// "justification.  "


// "This    is    an"
// "example  of text"
// "justification.  "
//  0123456789012345


// curSpaces = 1

// 2 breaks



// "What","must","be","acknowledgment","shall","be"

// "what must be ack
//  0123456789012345


// currSpaces = 4

// currBreaks = 2


// space[0] = 2

// space[1] = 2


// "acknowledgement "
//  0123456789012345

// Algorithm is 

// i) find the trailing spaces, find the words that fit
// ii) See if there are more upcoming words 
//     if not perform the space fitting algorithm
//         i) If the word fit push it to the array
//         ii) Number of spaceBreaks = number of words - 1
//         iii) 
        
        
        
        
        
//         10 extra spaces if word.length == 1 -> move nextLine
//         numOfSpaces % breaks - to routinely apply
//         additionalSpaces = (numOfSpaces / breaks)
//         (word.length)
//         word + additionalSpace + numOfSpace
        

        