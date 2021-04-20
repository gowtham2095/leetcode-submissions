/**
 * @param {number} n
 * @return {number}
 */

function fibonacci(n) {
    if (n == 0)
        return 0;
    if (n < 2)
        return n;
    
    let prev = 0;
    let curr = 1;
    let i = 1;
    while(i != n) {
        let temp = curr;
        curr = prev + curr;
        prev = temp;
        i++;
    }
    return curr;
}

var fib = function(n) {
    return fibonacci(n);
};