/*
 * Author: Kristine Buriel>
 * Created: 06/05/2024
 * Lab 8: Anon Functions
 */

function squareIt(x){
    return x * x;
}

var myArray = [1, 2, 3, 4]

function square(x) {
    return x * x;
}
console.log(square(5))
console.log(square(2000))

var result = array.map(squareIt);
console.log("squared array: ", result);

var result = array.map(function(x){
    return x*2;
})
console.log("array again: ", result);
