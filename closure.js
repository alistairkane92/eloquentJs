function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// able to access it because of outer function's lexical scope
// local variables are not conflicting - multiple instances of localVariable can exist because they are created each time the function is called
// different calls don't trample on each local variable
// being able to reference a specific instance of local variable inside function is called 'closure'
// inner function is 'a closure' because it makes local variable private (i.e closes over)

function multiplier(factor){
  return function(number){
    return number * factor;
  }
}

var twice = multiplier(2);
console.log(twice);
console.log(twice(5));

// above function "freezes" local variable "factor" on initial call of multiplier function and "unfreezes" the variable for the call of the inner function. 
