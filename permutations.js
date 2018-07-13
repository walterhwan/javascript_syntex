function permutation(arr) {
  if (arr.length <= 1) return [arr];

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice();
    let el = newArr.splice(i, 1)[0];
    let prev = permutation(newArr);

    let temp = prev.map((el2) => {
      el2.push(el);
      return el2;
    });
    result = result.concat(temp);
  }

  return result;
}

console.log(permutation([1,2,3,4]));
