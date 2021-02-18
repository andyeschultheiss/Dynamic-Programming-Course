// countConstruct(string, Array[string])
// return the number of ways a target can be constructed by concatenating 'wordBank' elements,
// using each element as many times as needed


const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;
    
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWaysForRest = countConstruct(suffix, wordBank, memo)
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};


console.log(countConstruct('potato', ['po', 'tat', 'o', 'pot', 'at', 'potat', 'ta', 'toto']));  // 3
console.log(countConstruct('skateboard', ['sk', 'ska', 'tate', 'board', 'bet', 'bo', 'boar', 'road']));  // 0
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeed', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'ed', 'eef', 'd']));  // 9016625
