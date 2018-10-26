// Business Logic
function createNumberList(number){
  return number;
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
