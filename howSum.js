// Write a function howSum(targetSum, numbers) accepting an int targetSum and an integer array of numbers 
// The function should return an array containing any combination of array elements that add up to the targetSum exactly
// Elements of the array may be used as many times as needed
// If there is no combination which adds up to the target, return null
// We can assume all input numbers are non-negative


const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num ]; 
            return memo[targetSum];
        } 
    }

    memo[targetSum] = null;
    return null;
};

// m = target sum
// n = numbers.length

// Brute force:
// time: O(m * n^m)
// space: O(m)

// Memoized:
// time: O(n*m^2)
// space: O(m^2)

console.log(howSum(7, [3,4,5,7]));  // return [4, 3] OR [7]
console.log(howSum(8, [2,3,5]));  // return [2,2,2,2] OR [2,3,3] OR [3,5]
console.log(howSum(7, [2,4]));  // return null
console.log(howSum(0, [1,2,3]));  // return []
console.log(howSum(3000, [7])); // return null
