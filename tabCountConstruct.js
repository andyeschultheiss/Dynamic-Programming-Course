// countConstruct(string, Array[string])
// return the number of ways a target can be constructed by concatenating 'wordBank' elements,
// using each element as many times as needed


const tabCountConstruct = (target, wordBank) => {
    var table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (word === target.slice(i, i + word.length)) {
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
};

// m = target
// n = wordBank.length

// O(m^2 * n) time and O(m) space

console.log(tabCountConstruct('potato', ['po', 'tat', 'o', 'pot', 'at', 'potat', 'ta', 'toto']));  // 3
console.log(tabCountConstruct('skateboard', ['sk', 'ska', 'tate', 'board', 'bet', 'bo', 'boar', 'road']));  // 0
console.log(tabCountConstruct('eeeeeeeeeeeeeeeeeeeeeeeed', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'ed', 'eef', 'd']));  // 9016625