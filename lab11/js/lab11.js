/* Lab 11 - JavaScript Events and Forms
Taking a value from and input field, sorting it, and then putting it on the page
Author: Kristine
Date: 6/9/24 */





//Defining a function that retrieve user's name & sort the letters
function sortName (){
    //retrieve user's name
    let userName = $("#input-here").val()
    //sort and return user's name
    let sortedName = userName.split('').sort().join('');
    //return sorted name
    $("#output-name").html("Your new name is: "+ sortedName+"!");
  };
  
  //when button is clicked, it will run function & output sorted name
  $("#my-button").click(sortName);