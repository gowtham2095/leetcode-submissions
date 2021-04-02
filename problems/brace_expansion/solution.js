/**
 * @param {string} s
 * @return {string[]}
 */

function formList(s) {
    let closebracketsSplit = s.split('}');
    let openbracketsSplit = closebracketsSplit.map((str) => str.split('{'));
    let flatStringList = openbracketsSplit.flat();
    let stringList = flatStringList.filter((str) => str);
    let finalList = stringList.map((str) => {
        let list = str.split(',');
        list.sort();
        return list;
    });
    return finalList;
}

function perumteString(list, result, i, str) {
    if (i == list.length) {
        result.push(str);
    }
    else {
        list[i].forEach((char) => {
            perumteString(list, result, i + 1, str +char);
        });
    }
}

var expand = function(s) {
    let strList = formList(s);
    let result = [];
    perumteString(strList, result, 0, '');
    return result;
};






// [a, b] [c] [d, e, f]



