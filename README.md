# `Array.from` (ES6+)
Gett the rest of the input args

```javascript
function thisWorksToo() {
  let args = Array.from(arguments);  
  args instanceof Array; //=> true
  args.forEach((arg)=> console.log(arg)); // This works too!
}
```

# Grab the rest of args (ES6+)
```javascript
function restWay(firstArg, ...otherArgs) {
  console.log(`The first arg is ${firstArg}!`);

  console.log(`The other args are:`);

  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}
```

# Spread Syntax (ES6+)

```javascript
function madLib(verb, pluralNoun1, pluralNoun2, place) {
  return `I like to ${verb} ${pluralNoun1} with ${pluralNoun2} by the ${place}.`;
}

const words = ["eat", "socks", "rabbits", "sea"];

madLib(...words); // equivalent to 'madLib(words[0], words[1], words[2], words[3])'
//=> "I like to eat socks with rabbits by the sea."
```

# For loop

```javascript
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

```javascript
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

```javascript
const pos = [1, 2];
const [x, y] = pos;
```

# Get object types
```javascript
Object.prototype.toString.call('abc') // [object String]
Object.prototype.toString.call(/abc/) // [object RegExp]
Object.prototype.toString.call([1,2,3]) // [object Array]

// But it will not work for user defined objects *cry
```

This should work for user defined classes. But not all of them. If the `Thiny.prototype` is set to something else, it will not work.
```javascript
function Cat(name) {
  this.name = name;
}

let cat = new Cat('mason');
var myArray = [1,2,3];
console.log(myArray.constructor === Array); // true
console.log(cat.constructor === Cat); // true
```

# Non-blocking event queue

```javascript
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
```javascript
'a'.charCodeAt(0); // 97
'z'.charCodeAt(0); // 122
String.fromCharCode(97);
String.fromCharCode(122);
// ruby: 'a'.ord
// ruby: 97.chr
```

#### Generate (alphabet) a array of string from a to z

```javascript
let alphabet = Array(26).fill(1).map((val, idx) => {
  return String.fromCharCode(val + idx + 96);
});
// ruby: ('a'..'z').to_a
```

# Array Methods

#### Check if element is included in array `includes`
```javascript
let arr = [3, 1, 2];
console.log(arr.includes(3)); // true
console.log(arr.includes(4)); // false
console.log(!arr.includes(4)); // true, ! sign works as negation in js as well
// ruby: arr.include?(3)
```

#### Sort array `Array#sort`
Default sort
```javascript
console.log(arr.sort()); // [1, 2, 3]
// ruby: arr.sort()
```

Pass anonymous function to sort
```javascript
chars.sort((a, b) => {
  return a.charCodeAt(0) - b.charCodeAt(0);
});
```

#### Swapping elements
```javascript
let arr2 = [3, 5, 1]
[arr2[0], arr2[1]] = [arr2[1], arr2[0]];
console.log(arr2) // [5, 3, 1]
// ruby: arr2[0], arr2[1] = arr2[1], arr2[0]
```


#### `Array.isArray` method
```javascript
console.log(Array.isArray([1, 2])) // true
console.log(Array.isArray(3)); // false

// ruby: [1, 2].is_a?(Array)
```

#### `select` / `filter` method
```javascript
let selected = [0, 2, 2, 4, 5, 5].filter((val, idx, self) => {
  return val === idx;
}); // => [0, 2, 5]
// ruby:
// [0, 2, 2, 4, 5, 5].select.each_with_index do |el, i|
//  el == i
// end
```

#### Find index of element `Array#indexOf`
```javascript
[1,2,3,4,5,6].indexOf(4); // => 3
```
