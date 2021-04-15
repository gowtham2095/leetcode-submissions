/**
 * @param {string} text
 * @return {string}
 */
function getNumberOfSpacesAndWords(text) {
    let numberOfSpaces = 0;
    let isCharUnseen = true;
    let wordCount = 0;
    for (let ch of text) {
        if (ch == ' ')  {
            numberOfSpaces++;
            isCharUnseen = true;
        }
        else if (isCharUnseen) {
            wordCount++;
            isCharUnseen = false;
        }
    }
    
    return [numberOfSpaces, wordCount];
}

function haveEquivalenSpaces(text) {
    
    let [numberOfSpaces, wordCount] = getNumberOfSpacesAndWords(text);
    if (wordCount == 1)
        return text.trim() + ' '.repeat(numberOfSpaces);
    
    let spacesBetweenCount = Math.floor(numberOfSpaces/(wordCount - 1));
    
    let spacesAtEnd = numberOfSpaces % (wordCount - 1);
    
    for (var i = 0; i < text.length ; i++) {
        if (text[i] != ' ')
            break;
    }
    
    for (var j = text.length - 1; j >=0;  j--) {
        if (text[j] != ' ')
            break;
    }
    
    let result = '';
    for (; i <= j; i++) {
        if (text[i] != ' ') {
            result = result + text[i];
        } else {
            let k = 0;
            while (k < spacesBetweenCount) {
                result += ' ';
                k++;
            }
            while(text[i] == ' ' && i <= j) {
                i++;
            }
            i--;
        }
    }
    result = result + ' '.repeat(spacesAtEnd);
    return result;
}

var reorderSpaces = function(text) {
    return haveEquivalenSpaces(text);
};

