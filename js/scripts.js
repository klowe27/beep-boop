// Business Logic
function createNumberList(number) {
  var numberList = [];
  for (var i = 0; i <= number; i++) {
    var numbersInList = (i.toString()).split("");
    if (i % 3 === 0 && i !== 0) {
      numberList.push("I'm sorry [name]. I'm afraid I can't do that.")
    } else if (numbersInList.includes("1")) {
      numberList.push("Boop!")
    } else if (numbersInList.includes("0")) {
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
