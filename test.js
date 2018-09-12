// Example using a function expression
function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
      foo: 42,
      bar: function() {
        console.log('Inside `bar`:', this.foo);
      },
    };
  }
  
  let object = {foo: 21};
  createObject.call(object).bar(); // override `this` inside createObject

  // Example using a arrow function
function createObject2() {
    console.log('Inside `createObject`:', this.foo);
    return {
      foo: 42,
      bar: () => console.log('Inside `bar`:', this.foo),
    };
  }
  
  createObject2.call(object).bar(); // override `this` inside createObject