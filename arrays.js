let animals = ['lion', 'tiger', 'cheetah'] // creating array

console.log(animals) // prints whole array
console.log(animals[1]) // prints element at index 1
console.log(animals[1000]) // prints undefined because the element does not exist.

// adding/modifying elements.
animals[3] = 'giraffe' // adds giraffe to index 3
console.log(animals) // prints modified array
console.log(animals[5]) // prints undefined because the element does not exist.

animals[1] = 'zebra' // makes zebra the value for 1 in array
console.log(animals) // prints new array

animals.push('elephant') // adds element to end of array
console.log(animals)

let lastAnimal = animals.pop() // removes last thing from array. can save if needed.
console.log(lastAnimal) // prints removed element
console.log(animals)

animals.unshift('deer') // adds element to beginning of array
console.log(animals)

let firstAnimal = animals.shift() // removes first element of array
console.log(firstAnimal) // prints removed element
console.log(animals)

animals.reverse()  // reverses order of array
console.log('walrus')

animals.sort() // sorts undefined items to end and alphabetical order
console.log(animals)

let numberOfAnimals = animals.length //gets the length of array
console.log(numberOfAnimals) // prints length

console.log(animals.indexOf('lion'))

// checking if it is in the array
if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array')
}
// check if in or not in array below
if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

// join connects everything with a string
console.log(animals.join(' * '))

animals.forEach( function(animal) {
    console.log(animal.toUpperCase()) // prints each animal in uppercase
})

// use loop w animals array, can u print length of each animal name
animals.forEach(function(animal) {
    console.log(animal.length)
})

animals.push('alligator') // adding new element

// create new array with the lengths of each animal name
let animalNameLength = []
animals.forEach( function(animal) {
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)