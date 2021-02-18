// Write a function bestSum(targetSum, numbers) accepting an int targetSum and an integer array of numbers 
// The function should return an array containing the SHORTEST combination of array elements that add up to the targetSum exactly
// If there is a tie for shortest combination, return any one of the shortest
// If there is no combination which adds up to the target, return null
// We can assume all input numbers are non-negative


const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        } 
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

// m = target sum
// n = numbers.length

// Brute force
// time: O(m*n^m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)


console.log(bestSum(7, [5, 3, 4, 7]));  // [7]
console.log(bestSum(8, [2, 3, 5]));  // [5, 3]
console.log(bestSum(8, [1, 4, 5]));  // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25]));  // [25, 25, 25, 25]
console.log(bestSum(1000, [1, 2, 5, 25, 500]));  // [500, 500]
