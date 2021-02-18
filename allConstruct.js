// allConstruct(string, Array[string])
// return all combinations which can construct the target 
// in a 2D array


const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    let combinations = [];
    
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [ word, ...way ]);
            combinations.push(...targetWays);
        }
    }

    memo[target] = combinations;
    return combinations;
};


console.log(allConstruct('potato', ['po', 'tat', 'o', 'pot', 'at', 'potat', 'ta', 'toto']));  // [ [ 'po', 'tat', 'o' ], [ 'pot', 'at', 'o' ], [ 'potat', 'o' ] ]
console.log(allConstruct('purple', ['p', 'purp', 'ur', 'le', 'purpl']));  // [ [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ]
console.log(allConstruct('skateboard', ['sk', 'ska', 'tate', 'board', 'bet', 'bo', 'boar', 'road'])); // []
console.log(allConstruct('', ['cat', 'mouse'])); // [ [] ]

