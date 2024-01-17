//simple function that adds two numbers
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
//same here in arrow function
var add2 = function (numberOne, numberTwo) {
    return numberOne + numberTwo;
};
add(2, 3);
//function that takes in a number and returns a boolean
function isStringLengthGreaterThan(str, len) {
    return str.length > len;
}
//Arrya of numbers
var numbers = [1, 2, 3, 4, 5];
// old method  ===>   const num1: Array<number> = [1,2,3,4,5]
//Object with properties of various types
var person = {
    name: "john doe",
    age: 30,
    email: "john.doe@gmail.com"
};
//Tupple with two values of different types, enforces type and specific order
var tuple = ['hello', 123];
//tuple = [123,"hello"]  ie wrong order
//Enums with three values (limited options)
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
//Union type that can either a string or a number
var unionType = "hello";
unionType = 123;
var customType = 12;
//example usage
console.log(2, 3);
