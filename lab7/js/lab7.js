// index.js - lab 7! hard!
// Author: kristine buriel
// Date: 5/02/24

//let's sort the characters from the user input 
function sortuserName () { var userName = window.prompt("aaAHH!. Please tell me your name so I can make a battle cry!");
console.log("userName =", userName);
// split string to array 
var nameArray = userName.split('');
console.log("nameArray =", nameArray);
// sort the array 
var nameArraySort = nameArraySort;
// join array back to a string
var nameSorted = nameArraySort.join('');
console.log ("nameSorted =", nameSorted);
// I like to see these as steps
return nameSorted;
// these do the stuff and tell the user that it's doing it
}
function main() {
    var userName = window.prompt("aaAHH!. Please tell me your name so I can make a battle cry!");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortuserName(userName);
    document.writeln("AAAAAHHHHHHHH! FIGHT ON, " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("Shouting your name now<br>AHHHHHHHHHH!");
    document.writeln("<div class='name'>" + randomName + "</div>")
}
