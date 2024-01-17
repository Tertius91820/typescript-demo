//simple function that adds two numbers

function add(numberOne:number , numberTwo:number) : number{
  return numberOne + numberTwo
}

//same here in arrow function
const add2 = (numberOne: number, numberTwo: number): number => {
  return numberOne + numberTwo;
};

add(2,3)

//function that takes in a number and returns a boolean
function isStringLengthGreaterThan(str:string,len:number): boolean{
  return  str.length >len
}

//interface for a person object
interface Person {
  name: string
  age: number
  email?:string
}

//Arrya of numbers
const numbers:number[] = [1,2,3,4,5]
// old method  ===>   const num1: Array<number> = [1,2,3,4,5]

//Object with properties of various types
const person: Person ={
  name:"john doe",
  age:30,
  email:"john.doe@gmail.com"
}

//Tupple with two values of different types, enforces type and specific order
let tuple: [string,number] = ['hello',123]

//tuple = [123,"hello"]  ie wrong order

//Enums with three values (limited options)
enum Colors {
  Red,
  Green,
  Blue
}

//Union type that can either a string or a number
let unionType: string | number = "hello";
unionType = 123


//type alias for a reusable uder-define type
type alphanum = string|number
let customType:alphanum = 12

//example usage
console.log(2,3);
