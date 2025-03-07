var myVariable = "hello"
// "hello" is the data we are storing in our variable
// name of the variable
// what is var? Variable

var anything = "hello" // string
var anything1 = 1 // number
var anythingTrue = true // boolean (true / false)

let anythingLet = "let" // let means your variable can be changed later



anythingLet = "lettt"
anythingConst = "consttt" // THIS WILL NOT WORK. YOU CONNOT CHANGE CONST VARIABLE.

let thisVariable = "hello"
let camelCase = "hello"
let oneTwoThree = "hello"
let thisIsAnExample = "hello"

let camel_case = "hello"

let snake_case = "hello"
let this_is_an_example = "hello"

const myList = []

// 1. Use const first
// 2. Only use let when needed
// Industry standard
// Why even bother?
// we could all use let forever.
// memory ig
// let needs more memory

// Expressions
// Equal       ===
// Not Equal   !==
// And         &&
// Or          ||

if (addVariable == 2){
    console.log("it works!")
}
else{
    console.log("it didn't work.")
}


const addVariable = 1 + 1
const subtractVariable = 1 - 1
const multiplyVariable = 1 * 1
const divideVariable = 1 / 1

const helloWorld = "Hello" + "World"
const booleansAdd = true + true

// f(x)

// This is a function
function somethingElse(){
    console.log(addVariable)
}

// Activity: Create a function that takes and age variable and tells us
// which age group they belong to (such as "Teenager" "Young adult" "infant" )
// Infant
// Child
// Preteen
// Teenager
// Adult
// Middle-age
// Senior

const age = 5

function ageRange(){
    if (age = 1){
        console.log("infant")
    }
    if (age < 3 && age < 10){
        console.log("Child")
    }
    if (age >= 10 && age <= 12){
        console.log("Preteen")
    }
    if (age < 20 && age >= 13){
        console.log("teenager")
    }
    if (age >= 20 && age <= 40){
        console.log("Young adult")
    }
    if (age > 40 && age <= 60){
        console.log("Middle-age")
    }
    if (age > 60 && age <=120){
        console.log("Senior")
    }

}
