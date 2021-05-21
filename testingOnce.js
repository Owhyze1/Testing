 once = function(func) {
  // TIP: These variables are stored in a "closure scope" (worth researching),
  // so that they'll remain available to the newly-generated function every
  // time it's called.
  var alreadyCalled = false;
  var result;

  // TIP: We'll return a new function that delegates to the old one, but only
  // if it hasn't been called before.
  return function() {
    if (!alreadyCalled) {
      // TIP: .apply(this, arguments) is the standard way to pass on all of the
      // infromation from one function call to another.
      result = func.apply(this, arguments);
      alreadyCalled = true;
    }
    // The new function always returns the originally computed result.
    return result;
  };
};


var testfunction = once(function(a, b) {
  return a + b;
});

testfunction(1,2);
testfunction(3,3);
var result = testfunction(20, 3);
console.log(result);