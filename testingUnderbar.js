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


function extend(obj) {
  each(arguments, function (object) {
    each(object, function (value, key) {
      if (obj[key] === undefined) {
        obj[key] = value;
      }
    });
  });
  return obj;
}



var result = extend({ a: 'x' }, { a: 'b' });
console.log(result);