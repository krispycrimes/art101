//let's sort the characters from the user input 
function sortUserName() {
    var userName = window.prompt("aaAHH!. Please tell me your name so I can make a battle cry!");
    console.log("userName =", userName);
    // split string to array 
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array 
    // missed to call .sort method on array. Fixed this line as below.
    var nameArraySort = 	nameArray.sort();
    // join array back to a string
    var nameSorted = 	nameArraySort.join('');

    console.log ("nameSorted =", nameSorted);
    // I like to see these as steps
    return nameSorted;
}
function main() {
    var userName = window.prompt("aaAHH!. Please tell me your username so I can make a battle cry!");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = 	sortUserName(userName);

    document.writeln("AAAAAHHHHHH! FIGHT ON, " + sortedName + "</br></br>");
    
}