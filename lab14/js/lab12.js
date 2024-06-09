// lab.js - Tarot Suits Assignment
// Author: Kristine Gail Buriel
// Date: 6/9/2024



function tarotsuit(str) {
  len = str.length; 
  mod = len % 4; 

  if (mod == 0) { 
      return "Swords" 
  }
  else if (mod == 1) {
      return "Wands" 
  }
  else if (mod == 2) {
      return "Pentacles"
  }
  else if (mod == 3) {
      return "Cups"
  }
}

$("#button").click(function() { 
  var name = $("#input").val(); 
  var house = tarotsuit(name);
  newText = "<p>The energy that has found you is " + house + "</p>"; 
  $("#output").append(newText)
})