/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: kristine gail buriel
   Date: May 12 2024
*/

// Add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// Add click listener to the challenge button
$(document).on("click", "#button-challenge", function() {
    // Add or remove the "special" class from the challenge section
    $("#challenge").toggleClass("special");
});

// Add button to problems section
$("#Problems").append("<button id='button-problems'>Make Special</button>");

// Add click listener to the problems button
$(document).on("click", "#button-problems", function() {
    // Add or remove the "special" class from the problems section
    $("#Problems").toggleClass("special");
});

// Add button to results section
$("#Results").append("<button id='button-results'>Make Special</button>");

// Add click listener to the results button
$(document).on("click", "#button-results", function() {
    // Add or remove the "special" class from the results section
    $("#Results").toggleClass("special");
});