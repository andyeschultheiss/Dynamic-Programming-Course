// Write a function howSum(targetSum, numbers) accepting an int targetSum and an integer array of numbers 
// The function should return an array containing any combination of array elements that add up to the targetSum exactly
// Elements of the array may be used as many times as needed
// If there is no combination which adds up to the target, return null
// We can assume all input numbers are non-negative


const tabHowSum = (targetSum, numbers) => {
    var sumTable = Array(targetSum + 1).fill(null);
    sumTable[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (sumTable[i] !== null) {
            for (let num of numbers) {
                sumTable[i + num] = [ ...sumTable[i], num ];
            }         
        }
    }
    return sumTable[targetSum];
};

// m = target sum
// n = numbers.length
// time: O(m^2 * n)
// space: O(m)


console.log(tabHowSum(7, [3,4,5,7]));  // return [4, 3] OR [7]
console.log(tabHowSum(8, [2,3,5]));  // return [2,2,2,2] OR [2,3,3] OR [3,5]
console.log(tabHowSum(7, [2,4]));  // return null
console.log(tabHowSum(0, [1,2,3]));  // return []
console.log(tabHowSum(3000, [7])); // return null