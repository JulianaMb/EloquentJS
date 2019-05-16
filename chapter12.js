// Modify these definitions...

topScope.array = (...values) => Array.of(...values);


topScope.length = array => array.length;

topScope.element = (array, i) => array[i];

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
// → 6

Closure
run(`
do(define(f, fun(a, fun(b, +(a, b)))),
   print(f(4)(5)))
`);
// → 9
Explanation:

Functions are closures in JS.
You can declare nested functions and even return functions from one function.
Functions have lexical scope. This means that variables or bindings declared inside the function would be available when the function is called no matter how many times. 
The function goes with its scope and if it is a nested function with the parent scope.
A closure is a combination of the function and the it’s lexical environment or the scope that the function was declared.

You can understand lexical scope as a country constitution. Let’s use Canada as an example. Canada has it’s federal laws the scope of the federal law’s is the whole country. Each province has it’s own law. If I try to use a law from BC in ON it is not valid because it is not the scope of the law. :)

Another use case for closures are to define and have private methods.
This is known as module pattern.
You have a function that returns another function. Inside the function you do your private stuff and return an object or one function that uses the private stuff you declared but only exposes what you want.

When using this function you immediately calls it to have only the interface you want.

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


Using closures in this way provides a number of benefits that are normally associated with object-oriented programming -- in particular, data hiding and encapsulation.

// This is the old skipSpace. Modify it...
function skipSpace(string) {
  let skip = string.match(/^(\s|#.*)*/);
  return string.slice(skip[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}

specialForms.set = (args, scope) => {
  let outerScope = Object.getPrototypeOf(scope);
  for (;;){
    
    if (Object.prototype.hasOwnProperty.call(outerScope, args[0].name)) {
      outerScope[args[0].name] = scope[args[1].name];
      break;
    }
    outerScope = Object.getPrototypeOf(outerScope);
    if (outerScope === null) {
     	throw new ReferenceError("Binding not found"); 
    }
  }

}
run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
