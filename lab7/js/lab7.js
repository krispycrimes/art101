/*
 * Author: Kristine Buriel>
 * Created: 05/01/2024
 * Lab 7: Functions
 */

// Thanks to Wes for this lab code and to Wesbot for debugging n code suggestions
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// Function for shuffling an array 
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Function to convert all letters except the first one to upper case 
function convertAllLettersButFirstToUpperCase(string) {    
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName(userName) {
   return userName.toLowerCase().split("").sort().join("");
}

// randomizeName - a function that takes user input and randomizes the letters of their name 
function randomizeName(userName){
   var nameArray= userName.split('');
   console.log("nameArray =",nameArray);
   
   var shuffledString="";
   
        for (var i=nameArray.length-1;i>0;i--)
        {
            var j=Math.floor(Math.random()*(i+1));
            shuffledString+=nameArray[j];
            [nameArray[i],nameArray[j]]=[nameArray[j],nameArray[i]];
                
        }
        
    return convertAllLettersButFirstToUpperCase(shuffledString);

}	

    function main() {
       var userName=window.prompt("Hi. Please tell me your name so I can fix it.");
        document.writeln("<style>:root{--textlen:"+userName.length+";}</style>");
        var sortedName=sortUserName(userName);
        document.writeln("Here's your sorted name: "+sortedName+"</br></br>");
     
      	var newName=randomizeName(userName.toLowerCase());
      	document.writeln("And oh hey, I fixed your name.<br>Your new one is above.");
        	document.writeln("<div class='new'>"+newName+"</div>");
        
       
}
main();