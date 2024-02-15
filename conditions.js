// pre req for android programming - C# or Java

let takenCSharp = false
let takenJava = true

if (takenCSharp || takenJava) { // || means or, this statement means if one of these conditions are true then you pass.
    console.log('You meet the pre-requisites for Android') // says this if they did meet requirements.
} else {
    console.log('You must take C# or Java') // displayed if user did not meet requirements
}


// Your turn to be a senator, 3 requirements:
// be at least 30 yes old
// have been us citizen for at least 9 years
// must live in state you want to represent

let age = 35 // setting the variables to their values.
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Wisconsin'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) { // == leaves room for error (type cooersion, can be two dif types). === checks if value and type is the same
    console.log('You are eligible to be a senator')
} else {
    console.log('Sorry, you are not eligible') // displayed if entry does not meet these previously stated stipulations..
}

// falsy values - undefined, null, empty lists, empty objects, 0, false
if ({} === 0) { // default to ===, only use == when type cooersion is okay.
    console.log('the same!')
} else {
    console.log('not the same!')
}