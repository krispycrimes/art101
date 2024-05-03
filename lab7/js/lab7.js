/*
 * Author: Kristine Buriel>
 * Created: 05/01/2024
 * Lab 7: Functions
 */

function sortUserName() {
    var userName = window.prompt("Hello Agent. Please tell me your name so I can create your secret code name");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Note that I could have done the above lines as a single line:
    //  userName.toLower().split("").sort().join("")
    return nameSorted;

}

// output
document.writeln("Hello Agent ", 
sortUserName(), "</br>");