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
  var result = {};

  return function() {

  var arg = [];
  for (var i = 0; i < arguments.length; i++) {
    arg.push(arguments[i]);
  }
  arg = arg.toString();
  // console.log(arg);

  if (result[arg] === undefined) {
    result[arg] = func.apply(this, arguments);
  }
  return result[arg];//func.apply(this, arguments);
  }
}


var add = function(a,b) {
  return a + b;
};

var memoAdd = memoize(add);
console.log(add(1,2));
console.log(memoAdd(1,2));
console.log(memoAdd(3,4));

// var onceAdd = once(add);
// console.log(onceAdd(1,4));
// console.log(onceAdd(2,4));