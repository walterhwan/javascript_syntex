function wellFormedString(str) {
  let record = [];
  let leftSym = ['{', '(', '['];
  let rightSym = ['}', ')', ']'];
  str.split('').forEach((char) => {
    console.log(record);
    if (leftSym.includes(char)) {
      record.push(char);
    } else if (rightSym.includes(char)) {
      if (record[record.length-1] === leftSym[rightSym.indexOf(char)]) {
        record.pop();
      } else {
        return false;
      }
    }
  });

  return record.length === 0;
}


console.log(wellFormedString('([]){()}'));
console.log(wellFormedString('[(]{)}'));
