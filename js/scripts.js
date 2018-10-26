// Business Logic
function createNumberList(number) {
  var numberList = [];
  for (var i = 0; i <= number; i++) {
    if (i === 1) {
      numberList.push("Boop!")
    } else if (i === 0) {
      numberList.push("Beep!");
    } else {
      numberList.push(i);
    }
  }
  return numberList;
}

// User Interface Logic
$(document).ready(function(){
  $("#beepBoop").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = createNumberList(number);
    $("#results").text(result);
  });
});
