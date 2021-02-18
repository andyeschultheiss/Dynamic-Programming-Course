


const tabAllConstruct = (target, wordBank) => {
    var table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (word === target.slice(i, i + word.length)) {
                var newCombos = table[i].map(subArray => [ ...subArray, word ]);
                table[i + word.length].push(...newCombos);
            }
        }
    }

    return table[target.length];
};

// m = target.length
// n = wordBank.length

// O(n^m) time and space


console.log(tabAllConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));  // [ [abc, def], [ab, c, def], [abcd, ef], [ab, cd, ef] ] (4 ways)
console.log(tabAllConstruct('purple', ['p', 'purp', 'ur', 'le', 'purpl']));  // [ [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ]
console.log(tabAllConstruct('skateboard', ['sk', 'ska', 'tate', 'board', 'bet', 'bo', 'boar', 'road'])); // []
console.log(tabAllConstruct('', ['cat', 'mouse'])); // [ [] ]
