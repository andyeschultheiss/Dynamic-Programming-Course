// canConstruct(string, Array[string]) 
// return bool


const tabCanConstruct = (target, wordBank) => {
    var table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (word === target.slice(i, i + word.length)) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length];
};

// m = target
// n = wordBank.length

// time: O(m^2 * n)
// space: O(m)


console.log(tabCanConstruct('potato', ['po', 'tat', 'o', 'pot', 'at', 'potat', 'ta', 'toto']));  // true
console.log(tabCanConstruct('skateboard', ['sk', 'ska', 'tate', 'board', 'bet', 'bo', 'boar', 'road']));  // false
console.log(tabCanConstruct('eeeeeeeeeeeeeeeeeeeeeeeed', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'ed', 'eef', 'd']));  // true
