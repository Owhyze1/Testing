
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
  if (accumulator === undefined) {
    accumulator = collection[0];
    collection = collection.slice(1);
  }
  // each(collection[i], i, collection)
  each(collection, function(value, key) {
    accumulator = iterator(accumulator, value);

  });
  return accumulator;
}

// determine whether all elements match a truth test using reduce
var every = function(collection, iterator) {

  var result = reduce(collection, function(accumulator, value) {
    if (iterator(value)) {
      return true;
    }
    return false;
  }, true);
  return result;
}

// var testcase = [true, {}, 1]; // true
var testcase = [null, 0, undefined]; // false

var result = every(testcase, identity);
console.log("result = " + result);



























// var every = function(collection, iterator) {
//   // use reduce
//   var allElementsPass = true;
//   if (iterator === undefined && arguments.length === 1) {
//     each(collection, function(value) {
//       if (allElementsPass === true && value === true) {
//         allElementsPass = true;
//       } else {
//         allElementsPass = false;
//       }
//     });
//     return allElementsPass;
//   }
//   each(collection, function(value) {
//     if (iterator(value) === value && allElementsPass && value === true) {
//       allElementsPass = true;
//     } else if (iterator(value) === true && allElementsPass) {
//       allElementsPass = true;
//     } else {
//       allElementsPass = false;
//     }
//   });

//   return allElementsPass;
// }



