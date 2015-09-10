var countBy = function(numberOne, numberTwo) {
  var counter = [];

  for(var index = numberTwo; index <= numberOne; index += numberTwo) {
    counter.push(index);
  }
  return counter;

};

$(document).ready(function() {
  $("form#count-by").submit(function(event) {
    var numberOne = parseInt($("input#number-one").val());
    var numberTwo = parseInt($("input#number-two").val());
    var counter = countBy(numberOne, numberTwo);
console.log(counter)
    $(".number-list").text(counter);

    $("#result").show();
    event.preventDefault();
  });
});
