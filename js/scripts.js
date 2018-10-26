// Business Logic
function createNumberList(number, name) {
  var numberList = [];
  for (var i = 0; i <= number; i++) {
    var numberInList = (i.toString()).split("");
    if (i % 3 === 0 && i !== 0) {
      numberList.push("I'm sorry, " + name + ". I'm afraid I can't do that.")
    } else if (numberInList.includes("1")) {
      numberList.push("Boop!")
    } else if (numberInList.includes("0")) {
      numberList.push("Beep!");
    } else if (numberInList.includes("8")) {
      numberList.push("<img src='img/autumn.jpg'>")
    } else {
      numberList.push("<span style='color:" + generateColor() + "'>" + i + "</span>");
    }
  }
  return numberList;
}

function generateColor() {
  var red = randomNumber();
  var green = randomNumber();
  var blue = randomNumber();
  return "rgb(" + red + "," + green + "," + blue +")"
}

function randomNumber() {
  return Math.floor(Math.random()*255 +1)
}

// User Interface Logic
$(document).ready(function() {
  $("#beepBoop").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var number = parseInt($("input#number").val());
    var results = createNumberList(number, name);

    $("#resultsList").empty();
    $(".helpBlock").hide();
    $(".error").removeClass("error");

    if (!name || !number) {
      if (!name) {
        $(".helpBlock1").show();
        $(".nameInput").addClass("error");
      }
      if (!number) {
        $(".helpBlock2").show();
        $("#numberInput").addClass("error");
      }
    } else {
      $("#results").slideDown();
      results.forEach(function(result) {
        $("#resultsList").append("<li>" + result + "</li>");
      });
    }

    $("#reverseOrder").click(function() {
      $("#resultsList").empty();
      var reversedResults = results.reverse();
      reversedResults.forEach(function(reversedResult) {
        $("#resultsList").append("<li>" + reversedResult + "</li>");
      });
    });
  });

  $("#changeTheme").click(function() {
    var color = generateColor();
    $("h1").css("background-color", color);
    $(".formButton").css("background-color", color);
    $("label").css("color", color);
    $("h2").css("color", color);
  });
});
