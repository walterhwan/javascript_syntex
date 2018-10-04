const grayCode = n => {
  if (n === 0) return [0];

  let prev = grayCode(n - 1);
  let current = prev
    .slice()
    .map((_, idx) => prev[prev.length - 1 - idx] + prev.length);

  return [...prev, ...current];
};

console.log(grayCode(0));
console.log(grayCode(1));
console.log(grayCode(2));
console.log(grayCode(3));
