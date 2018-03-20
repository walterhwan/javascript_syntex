# `Array.from` (ES6+)
Gett the rest of the input args

```js
function thisWorksToo() {
  let args = Array.from(arguments);  
  args instanceof Array; //=> true
  args.forEach((arg)=> console.log(arg)); // This works too!
}
```

# Grab the rest of args (ES6+)
```js
function restWay(firstArg, ...otherArgs) {
  console.log(`The first arg is ${firstArg}!`);

  console.log(`The other args are:`);

  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}
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

# For loop

```js
let arr = [1, 2, 3, 4];

for (let el of arr) {
  console.log(el));
}

// for of loop with index
for (const [idx, el] of arr.entries()) {
  console.log(el, idx));
}
```
#### for loop with idx

```js
var myArray = [123, 15, 187, 32];

myArray.forEach(function (value, i) {
    console.log('%d: %s', i, value);
});

// Outputs:
// 0: 123
// 1: 15
// 2: 187
// 3: 32
```

# Array Destructing

```js
const pos = [1, 2];
const [x, y] = pos;
```

# Get object types
```js
Object.prototype.toString.call('abc') // [object String]
Object.prototype.toString.call(/abc/) // [object RegExp]
Object.prototype.toString.call([1,2,3]) // [object Array]

// But it will not work for user defined objects *cry
```

This should work for user defined classes. But not all of them. If the `Thiny.prototype` is set to something else, it will not work.
```js
function Cat(name) {
  this.name = name;
}

let cat = new Cat('mason');
var myArray = [1,2,3];
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
downloadAsync("http://example.com/file.txt",
  function(text) { console.log(text);
});
```

# String Methods

#### ASCII code to/from string
```js
'a'.charCodeAt(0); // 97
'z'.charCodeAt(0); // 122
String.fromCharCode(97);
String.fromCharCode(122);
// ruby: 'a'.ord
// ruby: 97.chr
```

#### Generate (alphabet) a array of string from a to z

```js
let alphabet = Array(26).fill(1).map((val, idx) => {
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
    fcn.apply(context, args.concat(otherArgs));
  };
};
```
```js
Function.prototype.myBind = function myBind(context, ...args) {
  return (...otherArgs) => {
    this.apply(context, args.concat(otherArgs));
  };
};
```
```js
Function.prototype.myBind = function myBind(context, ...args) {
  return (...otherArgs) => {
    this.call(context, ...args.concat(otherArgs));
  };
};
```

# Curry

#### Different ways of writting Curry
```js
Function.prototype.curry = function curry(numArgs) {
  let args = [];
  const _curry = (num) => {
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

#### Check if element is included in array `includes`
```js
let arr = [3, 1, 2];
console.log(arr.includes(3)); // true
console.log(arr.includes(4)); // false
console.log(!arr.includes(4)); // true, ! sign works as negation in js as well
// ruby: arr.include?(3)
```

#### Sort array `Array#sort`
Default sort
```js
console.log(arr.sort()); // [1, 2, 3]
// ruby: arr.sort()
```

Pass anonymous function to sort
```js
chars.sort((a, b) => {
  return a.charCodeAt(0) - b.charCodeAt(0);
});
```

#### Swapping elements
```js
let arr2 = [3, 5, 1]
[arr2[0], arr2[1]] = [arr2[1], arr2[0]];
console.log(arr2) // [5, 3, 1]
// ruby: arr2[0], arr2[1] = arr2[1], arr2[0]
```


#### `Array.isArray` method
```js
console.log(Array.isArray([1, 2])) // true
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
[1,2,3,4,5,6].indexOf(4); // => 3
```
