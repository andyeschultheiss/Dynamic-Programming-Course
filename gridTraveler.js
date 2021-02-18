// Imagine a traveler on a 2D rectangular grid. 
// The traveler begins in the top left corner and wants to make it to the bottom right corner.
// The traveler can only move down and right.
// How many ways can they travel to their goal on an m * n grid?

// Write a function gridTraveler(m, n) to calculate this

const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;

    // check: are arguments in memo
    if (key in memo) return memo[key];
    if (m == 0 || n == 0) return 0;
    if (m == 1 || n == 1) return 1;

    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key];
};

console.log(gridTraveler(2,3));  // 3
console.log(gridTraveler(3,2));  // 3
console.log(gridTraveler(6,6));  // 252
console.log(gridTraveler(18,18));  // 2333606220