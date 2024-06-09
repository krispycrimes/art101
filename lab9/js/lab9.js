// Add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// Add button to problems section
$("#Problems").append("<button id='button-problems'>Make Special</button>");

// Add button to results section
$("#Results").append("<button id='button-results'>Make Special</button>");

$(document).on("click", "#button-challenge", function() {
    $("#challenge").toggleClass("special");
});

$(document).on("click", "#button-problems", function() {
    $("#Problems").toggleClass("special");
});

$(document).on("click", "#button-results", function() {
    $("#Results").toggleClass("special");
});
