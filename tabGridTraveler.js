// Imagine a traveler on a 2D rectangular grid. 
// The traveler begins in the top left corner and wants to make it to the bottom right corner.
// The traveler can only move down and right.
// How many ways can they travel to their goal on an m * n grid?

// Write a function tabGridTraveler(m, n) to calculate this

const tabGridTraveler = (m, n) => {
    var travelerTable = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    travelerTable[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = travelerTable[i][j];
            if (j + 1 <= n) travelerTable[i][j + 1] += current;
            if (i + 1 <= m) travelerTable[i + 1][j] += current;
        }
    }
    return travelerTable[m][n];
}; 

console.log(tabGridTraveler(2,3));  // 3
console.log(tabGridTraveler(3,2));  // 3
console.log(tabGridTraveler(6,6));  // 252
console.log(tabGridTraveler(18,18));  // 2333606220

