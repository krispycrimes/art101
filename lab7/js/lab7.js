//let's sort the characters from the user input 
function sortUserName() {
    var userName = window.prompt("aaAHH!. Please tell me your name so I can make a battle cry!");
    console.log("userName =", userName);
    // split string to array 
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // missed to call .sort method on array. Fixed this line as below.
    var nameArraySort = 	nameArray.sort();
    // join array back to a string
    var nameSorted = 	nameArraySort.join('');

    console.log ("nameSorted =", nameSorted);
    return nameSorted;
}
function main() {
    var sortedName= 	sortUserName();

    document.writeln("AAAAAHHHHFIGHT ON, " + sortedName+ "</br></br>");
}
function randomizeNames(name){
    var shuffledString="";
    for (var i=name.length-1;i>0;i--)
    {
        var j=Math.floor(Math.random() * (i+1));
        shuffledString+=name[j];
        [name[i],name[j]]=[name[j],name[i]];
    }
    shuffledString+=names[0];
    
    return shuffledString;
}   