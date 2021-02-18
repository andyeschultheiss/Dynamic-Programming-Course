var combinationSum = function(candidates, target, memo = {}) {
    const ans = [];

    function add(list, current, sum, memo = {}) {
        if (target in memo) return memo[target];
        if(sum === target) return ans.push(list);
        if(sum > target) return;
        for(let i=current; i<candidates.length; i++) {
            add([...list, candidates[i]], i, sum + candidates[i], memo);
        }
    }
    
    add([], 0, 0);
    memo[target] = ans;
    return ans;
};

console.log(combinationSum([2,3,6,7], 7));  // [ [2, 2, 3 ], [ 7 ] ]

console.log(combinationSum([1,2,3,4,5,6,7,8,9], 9)); // lots
