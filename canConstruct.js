// canConstruct(string, Array[string]) 
// return bool


const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;
    
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank) === true) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
};

// m = target.length
// n = wordBank.length

// Brute force
// time: O(m * n^m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)

console.log(canConstruct('potato', ['po', 'tat', 'o', 'pot', 'at', 'potat', 'ta', 'toto']));  // true
console.log(canConstruct('skateboard', ['sk', 'ska', 'tate', 'board', 'bet', 'bo', 'boar', 'road']));  // false
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeed', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'ed', 'eef', 'd']));  // true




