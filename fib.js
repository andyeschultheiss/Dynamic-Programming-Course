// Write a function fib(n) which takes an integer argument 
// and returns the nth number of the Fibonacci sequence

// Classic recursive example:
const recursiveFib = (n) => {
    if (n <= 2) return 1;
    return recursiveFib(n-1) + recursiveFib(n-2);
};

//pretty quick for low values of n
console.log(recursiveFib(6));  // 8
console.log(recursiveFib(7));  // 13
console.log(recursiveFib(8));  // 21

//yikes - this one takes forever! 
// O(2^n) time complexity
//console.log(recursiveFib(50));


// implement memoization with a js object
// keys will be arguments to function, value will be return value
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};

// much better! 
// linear or O(n) time complexity
console.log(fib(50));  // 12586269025

