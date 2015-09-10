var countBy = function(numberOne, numberTwo) {
  var counter = [];

  for(var index = numberTwo; index <= numberOne; index += numberTwo) {
    counter.push(index);
  }
  return counter;

};
