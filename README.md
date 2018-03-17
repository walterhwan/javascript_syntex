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

Get ASCII codes
```javascript
'a'.charCodeAt(0); // 97
'z'.charCodeAt(0); // 122
String.fromCharCode(97);
String.fromCharCode(122);
// ruby:
```

Generate a array of string from a to z

```javascript
let alphabet = Array(26).fill(1).map((val, idx) => {
  String.fromCharCode(val + idx + 96);
});
// ruby: ('a'..'z').to_a
```
