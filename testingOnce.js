 once = function(func) {

  var alreadyCalled = false;
  var result;

  return function() {
    if (!alreadyCalled) {

      result = func.apply(this, arguments);
      alreadyCalled = true;
    }
    return result;
  };
};

memoize = function(func) {
  var alreadyCalled = false;
  var result = [];

  return function() {
    if (!alreadyCalled) {
      alreadyCalled = true;
      if (result.includes)
    }
  }
}


var testfunction = once(function(a, b) {
  return a + b;
});

testfunction(1,2);
testfunction(3,3);
var result = testfunction(20, 3);
console.log(result);