var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => {
        return a - b;
    });

    let res = [],
        len = candidates.length;

    let calc = (arr, sum, lastIndex) => {
        for (let i = lastIndex; i < len; i++) {
            console.log('res = %s', res);
            let num = candidates[i];
            let newSum = sum + num;
            if (newSum < target) {
                calc(arr.concat(num), newSum, i);
            } else if (newSum == target) {
                res.push(arr.concat(num));
                return;
            } else {
                return;
            }
        }
    };

    for (let i = 0; i < len; i++) {
        console.log('res = %s', res);
        let num = candidates[i];
        if (num > target) return res;
        if (num == target) {
            res.push([num]);
        } else {
            calc([num], num, i);
        }
    }

    return res;

};

console.log(combinationSum([2,3,5], 8));