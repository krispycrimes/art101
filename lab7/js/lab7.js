// index.js - lab 7! hard!
// Author: kristine buriel
// Date: 5/02/24

//let's sort the characters from the user input 
function sortUserName () { var UserName = window.prompt("aaAHH!. Please tell me your name so I can make a battle cry!");
console.log("UserName =", UserName);
// split string to array 
var nameArray = UserName.split('');
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
    var UserName = window.prompt("aaAHH!. Please tell me your name so I can make a battle cry!");
    document.writeln("<style>:root {--textlen: " + UserName.length + ";}</style>");
    var sortedName = sortUserName(UserName);
    document.writeln("AAAAAHHHHHHHH! FIGHT ON, " + sortedName + "</br></br>");
    var randomName = randomizeName(UserName);
    document.writeln("Shouting your name now<br>AHHHHHHHHHH!");
    document.writeln("<div class='name'>" + randomName + "</div>")
}
