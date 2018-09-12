const combinationSum = function(candidates, target) {
    
    if (!candidates || !candidates.length) { return []; }
    
    candidates.sort((a,b) => a - b);
    
    let sols = [];

    const findCombo = (candIdx, subtotal, solutions) => {
        for (let i = candIdx; i < candidates.length; i++) {
            if ((subtotal + candidates[i]) === target) {
                sols.push(solutions.concat(candidates[i]));
            } else if ((subtotal + candidates[i]) < target) {
                findCombo(i, subtotal + candidates[i], solutions.concat(candidates[i]));
            } else {
                break;
            }
        }
    };

    findCombo(0, 0, []);

    return sols;
};

console.log(combinationSum([2,3,5], 8));