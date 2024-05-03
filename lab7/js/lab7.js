// index.js - lab 7! hard!
// Author: kristine buriel
// Date: 5/02/24

//main function, this is all the dialogue 

function main() {
    var userName = window.prompt("aaAHH!. Please tell me your name so I can make a battle cry!");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("AAAAAHHHHHHHH! FIGHT ON, " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("Shouting your name now<br>AHHHHHHHHHH!");
    document.writeln("<div class='name'>" + randomName + "</div>")
}