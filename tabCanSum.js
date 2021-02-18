// Write a function canSum(targetSum, numbers) accepting an int targetSum and an integer array of numbers 
// The function should return a boolean indicating if it is possible to generate targetSum using numbers from the array
// Elements of the array may be used as many times as needed
// We can assume all input numbers are non-negative


const canSum = (targetSum, numbers) => {
    var sumTable = Array(targetSum + 1).fill(false);
    sumTable[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (sumTable[i] == true) {
            for (let num of numbers) {
                sumTable[i + num] = true;
            }         
        }
    }
    return sumTable[targetSum];
};


// m = targetSum
// n = numbers.length

// O(mn) time and O(m) space


console.log(canSum(80, [2,3,4,5]));  // true
console.log(canSum(100, [7,7,7,7,7,7]));  // false
console.log(canSum(100, [7,7,7,7,7,7,2]));  // true
