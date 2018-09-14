# `Array.from` (ES6+)

Get the rest of the input args

```js
function restOfArgs() {
  let args = Array.from(arguments);
  console.log(args instanceof Array);
  args.forEach(arg => console.log(arg));
}
// true
// 1
// 2
// 3
```

# Grab the rest of args (ES6+)

```js
function restWay(firstArg, ...otherArgs) {
  console.log(`The first arg is ${firstArg}!`);
  console.log(`The other args are:`);

  otherArgs.forEach(arg => {
    console.log(arg);
  });
}
// The first arg is 1!
// The other args are:
// 2
// 3
// 4
// 5
```

# Spread Syntax (ES6+)

```js
function madLib(verb, pluralNoun1, pluralNoun2, place) {
  return `I like to ${verb} ${pluralNoun1} with ${pluralNoun2} by the ${place}.`;
}

const words = ["eat", "socks", "rabbits", "sea"];

madLib(...words); // equivalent to 'madLib(words[0], words[1], words[2], words[3])'
//=> "I like to eat socks with rabbits by the sea."
```

<!-- # Add more (ES6+) -->

# Random numbers

```js
Math.floor(Math.random() * n + 1);
// return between 1 ~ n
```

# min/max values

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
```

# For loop

```js
let arr = [1, 2, 3, 4];

for (let el of arr) {
  console.log(el);
}

// for of loop with index
for (const [idx, el] of arr.entries()) {
  console.log(el, idx);
}
```

#### for loop with idx and original array

```js
let myArray = [123, 15, 187, 32];

myArray.forEach(function(value, i, array) {
  console.log("%d: %s: %s", i, value, array);
});

// Outputs:
// 0: 123: 123,15,187,32
// 1: 15: 123,15,187,32
// 2: 187: 123,15,187,32
// 3: 32: 123,15,187,32
```

#### for loop with break (some)

```js
let arr = [1, 2, 3, 4];

arr.some(function(val, idx, array) {
  if (val === 3) return true; // break loop using return true
  console.log("%d: %s", idx, val);
});
// output:
// 0: 1
// 1: 2
```

# Array Destructing

```js
const pos = [1, 2];
const [x, y] = pos;
```

# Get object types

```js
Object.prototype.toString.call("abc"); // [object String]
Object.prototype.toString.call(/abc/); // [object RegExp]
Object.prototype.toString.call([1, 2, 3]); // [object Array]

// But it will not work for user defined objects *cry
```

This should work for user defined classes. But not all of them. If the `Thiny.prototype` is set to something else, it will not work.

```js
function Cat(name) {
  this.name = name;
}

let cat = new Cat("mason");
var myArray = [1, 2, 3];
console.log(myArray.constructor === Array); // true
console.log(cat.constructor === Cat); // true
```

# Non-blocking event queue

```js
// bad, blocking
var text = downloadSync("http://example.com/file.txt");
console.log(text);

// Good, asynchronous and non-blocking
// or "run-to-completion guarantee"
downloadAsync("http://example.com/file.txt", function(text) {
  console.log(text);
});
```

# String Methods

#### ASCII code to/from string

```js
"a".charCodeAt(0); // 97
"z".charCodeAt(0); // 122
String.fromCharCode(97);
String.fromCharCode(122);
// ruby: 'a'.ord
// ruby: 97.chr
```

#### Generate (alphabet) a array of string from a to z

```js
let alphabet = Array(26)
  .fill(1)
  .map((val, idx) => {
    return String.fromCharCode(val + idx + 96);
  });
// ruby: ('a'..'z').to_a
```

# Bind

#### Different ways of writting myBind

```js
Function.prototype.myBind = function myBind(context, ...args) {
  let fcn = this;
  return function(...otherArgs) {
    return fcn.apply(context, args.concat(otherArgs));
  };
};
```

```js
Function.prototype.myBind = function myBind(context, ...args) {
  return (...otherArgs) => {
    return this.apply(context, args.concat(otherArgs));
  };
};
```

```js
Function.prototype.myBind = function myBind(context, ...args) {
  return (...otherArgs) => {
    return this.call(context, ...args.concat(otherArgs));
  };
};
```

# Curry

#### Different ways of writing Curry

```js
Function.prototype.curry = function curry(numArgs) {
  let args = [];
  const _curry = num => {
    args.push(num);
    if (numArgs <= args.length) {
      return this.apply(null, args);
    } else {
      return _curry;
    }
  };

  return _curry;
};
```

```js
function curriedSum(numArgs) {
  let args = [];
  return function _currySum(num) {
    args.push(num);
    if (numArgs <= args.length) {
      return args.reduce((acc, el) => acc + el);
    } else {
      return _currySum;
    }
  };
}
```

# Array Methods

#### Fill the array with the same numbers

```js
let arr = new Array(10).fill(0);
console.log(arr); // [0,0,0,0,0,0,0,0,0,0]
```

#### Check if element is included in array `includes`

```js
let arr = [3, 1, 2];
console.log(arr.includes(3)); // true
console.log(arr.includes(4)); // false
console.log(!arr.includes(4)); // true, ! sign works as negation in js as well
// ruby: arr.include?(3)
```

#### Sort array `Array#sort`

Default sort. sort() can only sort string, not numbers. 

```js
let arr = ['b', 'a', 'c'];
console.log(arr.sort()); // ['a', 'b', 'c']
// ruby: arr.sort()
```

#### Pass anonymous function to sort

```js
let arr = [-4, -1, 1, 5, 0];
arr.sort((a, b) => a - b);
console.log(arr);
```

#### Swapping elements

```js
let arr2 = ([3, 5, 1][(arr2[0], arr2[1])] = [arr2[1], arr2[0]]);
console.log(arr2); // [5, 3, 1]
// ruby: arr2[0], arr2[1] = arr2[1], arr2[0]
```

#### `Array.isArray` method

```js
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray(3)); // false

// ruby: [1, 2].is_a?(Array)
```

#### `select` / `filter` method

```js
let selected = [0, 2, 2, 4, 5, 5].filter((val, idx, self) => {
  return val === idx;
}); // => [0, 2, 5]
// ruby:
// [0, 2, 2, 4, 5, 5].select.each_with_index do |el, i|
//  el == i
// end
```

#### Find index of element `Array#indexOf`

```js
[1, 2, 3, 4, 5, 6].indexOf(4); // => 3
```

#### Find min & max of an Array

```javascript
let a = [1, 5, 3, 23];
let min = Math.min(...a); // 1
let max = Math.max(...a); // 23
```

#### Removing elements and/or insert element at the same time `splice`

`splice` changes the contents of an array by removing existing elements and/or adding new elements. The return value will be an array that contains the deleted elements.

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

```js
var months = ["Jan", "March", "April", "June"];
console.log(months.splice(1, 0, "Feb"));
console.log(months);
// output: Array ['Jan', 'Feb', 'March', 'April', 'June']

let arr = [1, 2, 3];
console.log(arr.splice(1, 1)); // [ 2 ]
console.log(arr); // [ 1, 3 ]

let arr = [1, 2, 3, 4];
console.log(arr.splice(1, 2, 5, 6)); // [ 2, 3 ]
console.log(arr); // [ 1, 5, 6, 4 ]

// remove element from array in-place
var review = ['a', 'b', 'c', 'b', 'a'];

review.forEach(function(item, index, object) {
  if (item === 'a') {
    object.splice(index, 1);
  }
});

console.log(review) // [ 'b', 'c', 'b' ]
```

#### You cannot define an array of arrays in this way

```js
let bucket = new Array(26).fill(new Array());
// because the arrays inside will all be referenced to the same array
```

You can do this instead

```js
Array.from(Array(26), () => new Array(3));
```

#### Define an 2d array of the same size and dimensions (every row has different size)

```js
let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
let array = Array.from(Array(triangle.length), (arr, i) => {
  return Array(i + 1);
});
console.log(array);
// output:
// [ [ <1 empty item> ],
//   [ <2 empty items> ],
//   [ <3 empty items> ],
//   [ <4 empty items> ] ]
```

### [Why you should use Object.is() in equality comparison][1]

[1]: http://www.jstips.co/en/javascript/why-you-should-use-Object.is()-in-equality-comparison/

```js
0 == " "; //true
(null == undefined[1]) == //true
  true; //true
NaN === NaN; //false

Object.is(0, " "); //false
Object.is(null, undefined); //false
Object.is([1], true); //false
Object.is(NaN, NaN); //true
```

### Array#slice

Copy array 

```js
let arr = [1,2,3];
let arr2 = arr.slice();
```

Drop two elements 

```js
let arr = [1,2,3];
console.log(arr.slice(2)); // [3]
```