console.log('Hello world!')

// three ways to create variables
let color = 'blue'
var size = 'medium'  // not reccomended
const language = 'Javascript'  // can change this value
// language = 'C#'  this is error

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = 'Hi Programmers'

console.log('There are ' + quantity + ' programmers.')

let todayTemp = 75

console.log('Today\'s temperature is ' + todayTemp + 'F')

let tempC = (todayTemp -32) * 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')
// .toFixed limits number of decimal places
// console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp}F')

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`) //template string