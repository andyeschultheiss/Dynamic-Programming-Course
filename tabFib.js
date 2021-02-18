// Write a tabulated Fibonacci function


const tabFib = (n) => {
    var fibTable = Array(n + 1).fill(0);
    fibTable[1] = 1;
    for (let i = 0; i <= n; i++) {
        fibTable[i+1] += fibTable[i];
        fibTable[i+2] += fibTable[i];
    }
    return fibTable[n];
};

// time: O(n)
// space O(n)

console.log(tabFib(8)); // 21