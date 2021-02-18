// Write a function bestSum(targetSum, numbers) accepting an int targetSum and an integer array of numbers 
// The function should return an array containing the SHORTEST combination of array elements that add up to the targetSum exactly
// If there is a tie for shortest combination, return any one of the shortest
// If there is no combination which adds up to the target, return null
// We can assume all input numbers are non-negative


const tabBestSum = (targetSum, numbers) => {
    var sumTable = Array(targetSum + 1).fill(null);
    sumTable[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (sumTable[i] !== null) {
            for (let num of numbers) {
                var tempSum = [ ...sumTable[i], num ];
                if (!sumTable[i + num] || tempSum.length < sumTable[i + num].length) {
                    sumTable[i + num] = tempSum;
                }
            }         
        }
    }
    return sumTable[targetSum];
}

// m = target sum
// n = numbers.length

// O(n *m^2) time and O(m^2) space

console.log(tabBestSum(7, [5, 3, 4, 7]));  // [7]
console.log(tabBestSum(8, [2, 3, 5]));  // [3, 5]
console.log(tabBestSum(8, [1, 4, 5]));  // [4, 4]
console.log(tabBestSum(100, [1, 2, 5, 25]));  // [25, 25, 25, 25]
console.log(tabBestSum(1000, [1, 2, 5, 25, 500]));  // [500, 500]
