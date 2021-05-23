// console.log(Date.now());

var start = Date.now();
var stop = 1000;
var difference = 0;

while (difference < stop){
  difference = Date.now() - start;
}
console.log('done');