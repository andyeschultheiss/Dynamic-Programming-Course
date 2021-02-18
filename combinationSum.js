var combinationSum = function(candidates, target) {
    const ans = [];

    function add(list, current, sum) {
        if(sum === target) return ans.push(list);
        if(sum > target) return;
        for(let i=current; i<candidates.length; i++) {
            add([...list, candidates[i]], i, sum + candidates[i]);
        }
    }
    
    add([], 0, 0);
    return ans;
};

console.log(combinationSum([2,3,6,7], 7));  // [ [2, 2, 3 ], [ 7 ] ]
