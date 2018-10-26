// Business Logic
function createNumberList(number, name) {
  var numberList = [];
  for (var i = 0; i <= number; i++) {
    var numbersInList = (i.toString()).split("");
    if (i % 3 === 0 && i !== 0) {
      numberList.push("I'm sorry " + name + ". I'm afraid I can't do that.")
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
  $("#beepBoop").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var number = parseInt($("input#number").val());
    var results = createNumberList(number, name);
    console.log(results);
    $("#results").show();
    results.forEach(function(result) {
      $("#resultsList").append("<li>" + result + "</li>");
    });
  });
});
