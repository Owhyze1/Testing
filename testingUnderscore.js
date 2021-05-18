
var identity = function(val) { return val; }

var each = function(collection, iterator) {
  // console.log('FUNCTION each');
  var hasLengthProperty = function(collection){
    for (var i in collection) {
      if (i === 'length'){
        return true;
      }
    }
    return false;
  }

  var iterateObject = function(collection, iterator) {
    for (var i in collection){
      iterator(collection[i], i, collection);
    }
  }

  var iterateArray = function(collection, iterator) {
    // console.log('FUNCTION iterateArray');
    for (var i = 0; i < collection.length; i++) {
      // console.log(`i = ${i}, collection[i] = ${collection[i]}`);
      iterator(collection[i], i, collection);
      // console.log();
    }
  }
  if (hasLengthProperty(collection)) {
    iterateObject(collection, iterator);
  } else {
    if (collection.length) {
      iterateArray(collection, iterator);
    } else {
      iterateObject(collection, iterator);
    }
  }
};

var reduce = function(collection, iterator, accumulator) {
  // console.log('FUNCTION reduce');
  if (accumulator === undefined) {
    accumulator = collection[0];
    collection = collection.slice(1);
  }
  // each(collection[i], i, collection)
  each(collection, function(value, key) {
        // console.log(`accumulator: ${accumulator}, value = ${value}`);
    accumulator = iterator(accumulator, value);
        // console.log(`result (accumulator): ${accumulator}`);
        // console.log();
  });
  return accumulator;
}


var every = function(collection, iterator) {
  // use reduce
  var allElementsPass = true;
  if (iterator === undefined && arguments.length === 1) {
    each(collection, function(value) {
      if (allElementsPass === true && value === true) {
        allElementsPass = true;
      } else {
        allElementsPass = false;
      }
    });
    return allElementsPass;
  }
  each(collection, function(value) {
    if (iterator(value) === value && allElementsPass && value === true) {
      allElementsPass = true;
    } else if (iterator(value) === true && allElementsPass) {
      allElementsPass = true;
    } else {
      allElementsPass = false;
    }
  });

  return allElementsPass;
}

var testCases = [
  [],
  [true, {}, 1],
  [null, 0, undefined],
  [true, false, 1],
  [1, undefined, true],
  [undefined, undefined, undefined],
  [1],
  [0]
];

console.log();
for (var i = 0; i < testCases.length; i++) {
  var result = every(testCases[i], identity);
  console.log(`${result}`);
}
console.log();

