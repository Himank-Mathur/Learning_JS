// Premitive
// 7 types => String, Boolearn, null, undefined, Number, Symbol, BigInt
 
const score = 200;
const scoreValue= 200.45;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 34579108567297928476n
// Non Premitive (Refrence)
// 3 types => Array, Object, Functions

const hero = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: 'Himank',
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber );