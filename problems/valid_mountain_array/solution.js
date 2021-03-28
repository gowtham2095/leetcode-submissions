/**
 * @param {number[]} arr
 * @return {boolean}
 */
function isValid(arr) {
    if (arr.length < 3)
        return false
    let i = 1;
    let count = 0;
    while (i < arr.length) {
        if (arr[i - 1] > arr[i]) {
            break;
        } else if (arr[i-1] == arr[i]) {
            return false;
        }
        else {
            count++;
        }
        i++;
    }
    
    if (i == arr.length || count == 0)
        return false;
    
    while(i < arr.length) {
        if (arr[i - 1] < arr[i]) {
            return false;
        } else if (arr[i-1] == arr[i]) {
            return false;
        }
        i++;
    }
    
    return true;
}

var validMountainArray = function(arr) {
    return isValid(arr);
};




