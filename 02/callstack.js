// function multiply(a,b){
//     return a * b;
// }
// function square(n){
//     return multiply(n,n);
// }
// function printSquare(n){
//     var squared = square(n);
//     console.log(squared);
// }
// printSquare(4);

var mul = (a,b) => a*b;
var sqaure = (n) => mul(n,n);
var printSquare = (n) => sqaure(n);

console.log(printSquare(4));