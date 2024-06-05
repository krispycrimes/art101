/*
 * Author: Kristine Buriel>
 * Created: 06/05/2024
 * Lab 8: Anon Functions
 */

function squareIt(x){
    return x * x;
}

console.log("4 squared ",squareIt(4));
console.log("2000 squared: ",squareIt(2000));

array = [1,2,3,4]
console.log("my array: ",array);

var result = array.map(squareIt);
console.log("squared array: ", result);

var result = array.map(function(x){
    return x*2;
})
console.log("array again: ", result); 
