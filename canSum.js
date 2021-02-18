// Write a function canSum(targetSum, numbers) accepting an int targetSum and an integer array of numbers 
// The function should return a boolean indicating if it is possible to generate targetSum using numbers from the array
// Elements of the array may be used as many times as needed
// We can assume all input numbers are non-negative


const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (targetSum % num === 0 && num !== 1) return true;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
};


console.log(canSum(80, [2,3,4,5]));  // true

